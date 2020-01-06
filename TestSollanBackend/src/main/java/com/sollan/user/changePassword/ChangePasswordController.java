package com.sollan.user.changePassword;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.user.model.User.UserType;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class ChangePasswordController {
	
	
	
	@Autowired
	private ChangePasswordService service;
	
	
	@RequestMapping(value = BackendMappings.ChangePassword.INDEX, method = RequestMethod.POST)
	public Response changePassword(@RequestBody ChangePasswordParams params, 
			@RequestParam("userId")Long userId, @RequestParam("userType")UserType type) {
		return ResponseUtil.runInVoidTemplate(() -> service.changePassword(userId, type, params));
	}
	
	@RequestMapping(value = BackendMappings.ChangePassword.RESET, method = RequestMethod.GET)
	public Response resetPassword(@RequestParam("newPassword") String newPassword, 
			@RequestParam("userId")Long userId, @RequestParam("userType")UserType type) {
		return ResponseUtil.runInVoidTemplate(() -> service.resetPassword(userId, type, newPassword));
	}

}
