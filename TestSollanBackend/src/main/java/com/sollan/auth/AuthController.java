package com.sollan.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.user.model.User;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
import com.sollan.util.response.ResponseUtil;

@RestController
public class AuthController {
	
	
	@Autowired
	private AuthService authService;
	
	@RequestMapping(value = BackendMappings.Login.LOGIN, method = RequestMethod.GET)
	public ItemResponse<User> login(@RequestParam String login, @RequestParam String password){
		return ResponseUtil.runInItemTemplate(() -> authService.login(login, password));
	}

}
