package com.sollan.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.timer.service.TimerService;

@RestController
public class TestController {

	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String test() {
		return "135678";
		
	}
	
	

}