package com.sollan.timer.service;

public interface TimerService {

	String startTimerS();
	
	String stopTimerS();

	long getTimeElapsed();
	
	boolean getTimerStatus();

	String getCurrentTime();

}
