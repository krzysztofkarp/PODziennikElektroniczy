package com.sollan.timer.service;

import java.util.Collection;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

@Service
public class TimerServiceImpl implements TimerService {
	AtomicLong timeInMilis = new AtomicLong(0);
	long secondsForTest = 2400;
	boolean timerStarted;
	ScheduledExecutorService timer = Executors.newScheduledThreadPool(1);
	@Override
	public String startTimerS() {

		if (timerStarted == false) {
			timeInMilis.set(0);
			timerStarted = true;
			System.out.println("started timer");
//			ScheduledExecutorService timer = Executors.newScheduledThreadPool(1);
			timer.scheduleAtFixedRate(() -> {
				timeInMilis.set(timeInMilis.addAndGet(1000));
				if (timeInMilis.get() >= secondsForTest * 1000) {
					timer.shutdown();
				}
			}, 0, 1, TimeUnit.SECONDS);
			return "OK";
		} else {
			return "ERROR";
		}

		// Date timerDate = new Date();
		// timerDate.setTime(1000 * 60 * 40);
		// System.out.println(timerDate.getTime());

	}
	
	@Override
	public String stopTimerS() {
		if (timerStarted == true) {
			timer.shutdown();
			timerStarted = false;
		}
		return "Timer stopped";
	}
	
	
	

	@Override
	public String getCurrentTime() {

		long timer = (secondsForTest - (timeInMilis.get()) / 1000);
		long minutes = timer / 60;
		long seconds = timer % 60;

		String timerDisplayer = (minutes + ":" + String.format("%02d", seconds));
		return timerDisplayer;
	}
	
	@Override
	public boolean timeStarted() {
		return this.timerStarted;

	}

	@Override
	public boolean getTimerStatus() {
		
		return this.timerStarted;
	}





}
