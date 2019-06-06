package com.sollan.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.login.validation.CredentialsValidator;
import com.sollan.user.model.User;
import com.sollan.util.BackendMappings;
import com.sollan.util.Response;

@RestController
public class LoginController {
	
	@Autowired
	private CredentialsValidator validator;
	
	@RequestMapping(value = BackendMappings.Login.LOGIN, method = RequestMethod.GET)
	public Response<User> login(@RequestParam String login, @RequestParam String password){
		return validator.validate(login, password);
	}

}
