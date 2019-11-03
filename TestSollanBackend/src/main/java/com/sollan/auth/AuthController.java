package com.sollan.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.user.model.User;
import com.sollan.util.BackendMappings;
import com.sollan.util.Response;

@RestController
public class AuthController {
	
	
	@Autowired
	private AuthService authService;
	
	@RequestMapping(value = BackendMappings.Login.LOGIN, method = RequestMethod.GET)
	public Response<User> login(@RequestParam String login, @RequestParam String password){
		return authService.login(login, password);
	}

}
