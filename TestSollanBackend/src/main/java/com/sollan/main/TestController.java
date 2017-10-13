package com.sollan.main;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {
	


@RequestMapping(value = "/api/test", method = RequestMethod.GET)
	public String test() {	
	return "135678";		
	}
	
//	public Response<String> startTimer() {
//		Response<String> response = new Response<>();
//		response.setBool(setTestStarted(testStarted));
//		return response;
//	}
//
//	
//	@RequestMapping(value = "/api/getWasStarted", method = RequestMethod.GET)
//	public Response<String> getTime() {
//		Response<String> response = new Response<>();
//		response.getBool();
//		return response;
//	}
//	
}

	
	


