package com.sollan.timer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.main.Response;
import com.sollan.timer.service.TimerService;

@RestController
public class TimerController {
	@Autowired
	TimerService timerService;
	
	@RequestMapping(value ="/api/startTimer", method = RequestMethod.GET)
	public Response<String> startTimer() {
		Response<String> response = new Response<>();
		response.setItem(timerService.startTimerS());
		return response;
	}

	@RequestMapping(value ="/api/timeElapsed", method = RequestMethod.GET)
	public long timeElapsed() {
		return timerService.getTimeElapsed();
	}
	
	@RequestMapping(value ="/api/getTime", method = RequestMethod.GET)
	public Response<String> getTime() {
		Response<String> response = new Response<>();
		response.setItem(timerService.getCurrentTime());
		return response;
	}
	
}