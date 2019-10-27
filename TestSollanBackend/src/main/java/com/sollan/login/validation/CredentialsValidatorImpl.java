package com.sollan.login.validation;

import org.springframework.stereotype.Service;
import com.sollan.user.model.User;
import com.sollan.util.Response;

@Service
public class CredentialsValidatorImpl implements CredentialsValidator {
	
	
	
  
	
	
	
	@Override
	public Response<User> validate(String login, String password) {
		Response<User> resp = new Response<>();
		resp.setItem(validateCredentials(login, password));
		return resp;
	}
	
	
	
	private User validateCredentials(String login, String password) {
	
		
		
		return null;
	}
	
	
}
