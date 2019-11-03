package com.sollan.auth;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sollan.user.UserService;
import com.sollan.user.model.User;
import com.sollan.user.model.User.UserType;
import com.sollan.util.Config;
import com.sollan.util.Crypter;
import com.sollan.util.Response;
import com.sollan.util.Utils;


@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private Config config;
	
	@Autowired
	private Collection<UserService<?>> services;

	@Override
	public Response<User> login(String login, String password){
		
		try {
			return new Response<User>(authenticate(login, password));
		} catch (Exception e) {
			return new Response<User>(e.getMessage());
		}
	}
	

	public User authenticate(String login, String password) {
		
		Utils.throwIfCondition(Utils.nullOrEmpty(login) || Utils.nullOrEmpty(password), ()-> new RuntimeException("Login and password must be provided"));
		
		if(login.equals(config.getAdminLogin())) 
			return loginAdmin(login, password);
		else
			return loginUser(login, password);
	}
	
	
	public User loginUser(String login, String password) {
		User u = findInRepos(login);
		
		if(Utils.notNullAndNotEmpty(u)) {
			String p = Crypter.getInstance().decrypt(u.getPassword());
			Utils.throwIfCondition(!p.equals(password),() -> new RuntimeException("Login or password invalid"));
			u.setPassword(null);
			return u;
		} else {
			throw new RuntimeException("User does not exist");
		}
		
	}
	
	public User findInRepos(String login) {
		return services.stream().map(s -> s.findByUsername(login)).findAny().orElse(null);
	}
	
	public User loginAdmin(String login, String password) {
		Utils.throwIfCondition(!config.getAdminLogin().equals(login) || !config.getAdminPassword().equals(password),() -> new RuntimeException("Login or password invalid"));
		User admin = new User(config.getAdminLogin(), null, UserType.ADMIN, config.getAdminLogin(), null, null);
		admin.setId((long)99999);
		admin.setAdmin(true);
		return admin;
	}

}
