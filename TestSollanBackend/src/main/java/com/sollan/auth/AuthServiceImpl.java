package com.sollan.auth;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ExecutionException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.auth.model.UserWithToken;
import com.sollan.auth.token.TokenService;
import com.sollan.user.UserService;
import com.sollan.user.model.User;
import com.sollan.user.model.User.UserType;
import com.sollan.util.Config;
import com.sollan.util.Crypter;
import com.sollan.util.Utils;


@Service
public class AuthServiceImpl implements AuthService {
	

	private final Config config;
	private final TokenService tokenService;
	private final Collection<UserService<?>> services;
	
	
	@Autowired
	public AuthServiceImpl(Config config, TokenService tokenService, Collection<UserService<?>> services) {
		this.config = config;
		this.tokenService = tokenService;
		this.services = services;
	}

	
	
	@Override
	public UserWithToken login(String login, String password, HttpServletResponse resp){
		return authenticate(login, password, resp);
	}
	

	public UserWithToken authenticate(String login, String password, HttpServletResponse resp) {
		
		Utils.throwIfCondition(Utils.nullOrEmpty(login) || Utils.nullOrEmpty(password), ()-> new RuntimeException("Login and password must be provided"));
		
		
		
		if(login.equals(config.getAdminLogin())) {
			return loginAdmin(login, password, resp);
		}else {
			return loginUser(login, password, resp);
		}
			
			
		
	}
	
	
	public UserWithToken loginUser(String login, String password,HttpServletResponse resp) {
		User u = findInRepos(login);
		
		if(Utils.notNullAndNotEmpty(u)) {
			String p = Crypter.getInstance().decrypt(u.getPassword());
			Utils.throwIfCondition(!p.equals(password),() -> new RuntimeException("Login or password invalid"));
			u.setPassword(null);
			String token = tokenService.generateToken();
			 return new UserWithToken(u, token);
		} else {
			throw new RuntimeException("User does not exist");
		}
		
	}
	
	public User findInRepos(String login) {
		List<User> usrs = new ArrayList<>();
		services.forEach(s -> usrs.add(s.findByUsername(login)));
		return usrs.stream().filter(u -> Utils.notNullAndNotEmpty(u)).findFirst().get();
	}
	
	public UserWithToken loginAdmin(String login, String password, HttpServletResponse resp) {
		Utils.throwIfCondition(!config.getAdminLogin().equals(login) || !config.getAdminPassword().equals(password),() -> new RuntimeException("Login or password invalid"));
		User admin = createAdminAccount();
		String token = tokenService.generateToken();
		return  new UserWithToken(admin, token);
	}


	@Override
	public boolean isAuthenticated(String token) throws ExecutionException {
		return tokenService.isValid(token);
	}
	
	@Override
	public void logout(String token) {
		tokenService.removeToken(token);
	}
	
	private User createAdminAccount() {
		User admin = new User(config.getAdminLogin(), null, UserType.ADMIN, config.getAdminLogin(), null, null);
		admin.setId((long)99999);
		admin.setAdmin(true);
		return admin;
	}
	
	
}
