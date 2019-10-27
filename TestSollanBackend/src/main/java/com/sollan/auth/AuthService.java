package com.sollan.auth;

import com.sollan.user.model.User;

public interface AuthService {
	
	
	User login(String login, String password);

}
