package com.sollan.testsollan.timer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.testsollan.main.Response;
import com.sollan.testsollan.timer.service.TimerService;

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
	
	@RequestMapping(value ="/api/stopTimer", method = RequestMethod.GET)
	public Response<String> stopTimer() {
		Response<String> response = new Response<>();
		response.setItem(timerService.stopTimerS());
		return response;
	}

	@RequestMapping(value ="/api/getTime", method = RequestMethod.GET)
	public Response<String> getTime() {
		Response<String> response = new Response<>();
		response.setItem(timerService.getCurrentTime());
		return response;
	}
	@RequestMapping(value ="/api/getTimerStarted", method = RequestMethod.GET)
	public Response<Boolean> getTimerStarted() {
		Response<Boolean> response = new Response<>();
		response.setItem(timerService.timeStarted());
		return response;
	}
	
}
