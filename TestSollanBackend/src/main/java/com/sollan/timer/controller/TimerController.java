package com.sollan.timer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.timer.service.TimerService;

@RestController
public class TimerController {
	@Autowired
	TimerService timerService;
	
	@RequestMapping(value ="/start", method = RequestMethod.GET)
	public void start() {
		timerService.startTimer();
		
	}

	@RequestMapping(value ="/timeElapsed", method = RequestMethod.GET)
	public long timeElapsed() {
		return timerService.getTimeElapsed();
	}
	
	@RequestMapping(value ="/displayTimer", method = RequestMethod.GET)
	public String displayTimer() {
		return timerService.displayTimer();
	}
	
}
