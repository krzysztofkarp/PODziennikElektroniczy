package com.sollan.login.validation;

import com.sollan.user.model.User;
import com.sollan.util.Response;

public interface CredentialsValidator {
	
	
	Response<User> validate(String login, String password);

}
