package com.sollan.timer.service;

public interface TimerService {

	String startTimerS();
	
	String stopTimerS();
	
	String getCurrentTime();

	boolean timeStarted();

}
