package com.sollan.testsollan.timer.service;

public interface TimerService {

	String startTimerS();
	
	String stopTimerS();
	
	String getCurrentTime();

	boolean timeStarted();

}
