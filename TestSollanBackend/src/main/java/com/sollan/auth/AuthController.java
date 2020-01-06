package com.sollan.auth;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.auth.model.UserWithToken;
import com.sollan.user.model.User;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class AuthController {
	
	
	@Autowired
	private AuthService authService;
	
	@RequestMapping(value = BackendMappings.Login.LOGIN, method = RequestMethod.GET)
	public ItemResponse<UserWithToken> login(@RequestParam String login, @RequestParam String password, HttpServletResponse resp){
		return ResponseUtil.runInItemTemplate(() -> authService.login(login, password, resp));
	}
	
	@RequestMapping(value = BackendMappings.Login.LOGOUT, method = RequestMethod.GET)
	public Response logout(@RequestParam("X-AUTH-TOKEN") String token){
		return ResponseUtil.runInVoidTemplate(() -> authService.logout(token));
	}
	
	
	@RequestMapping(value = BackendMappings.Login.IS_AUTHENTICATED, method = RequestMethod.GET)
	public ItemResponse<Boolean> inAuthenticated(@RequestParam("X-AUTH-TOKEN") String token){
		return ResponseUtil.runInItemTemplate(() -> authService.isAuthenticated(token));
	}
	

}
