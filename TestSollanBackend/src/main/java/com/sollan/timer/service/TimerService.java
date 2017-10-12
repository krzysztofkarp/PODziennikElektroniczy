package com.sollan.timer.service;

public interface TimerService {

	String startTimerS();
	
	String stopTimerS();
	
	boolean getTimerStatus();

	String getCurrentTime();

	boolean timeStarted();

}
