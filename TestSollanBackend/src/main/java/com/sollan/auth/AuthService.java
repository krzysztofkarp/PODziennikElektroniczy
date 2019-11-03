package com.sollan.auth;

import com.sollan.user.model.User;
import com.sollan.util.Response;

public interface AuthService {
	
	
	Response<User> login(String login, String password);

}
