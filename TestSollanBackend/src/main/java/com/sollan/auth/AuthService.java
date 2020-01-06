package com.sollan.auth;

import java.util.concurrent.ExecutionException;

import javax.servlet.http.HttpServletResponse;

import com.sollan.auth.model.UserWithToken;

public interface AuthService {
	
	
	UserWithToken login(String login, String password,HttpServletResponse resp);
	boolean isAuthenticated(String token) throws ExecutionException;
	void logout(String token);

}
