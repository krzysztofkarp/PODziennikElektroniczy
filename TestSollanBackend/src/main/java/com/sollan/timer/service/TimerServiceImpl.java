package com.sollan.timer.service;

import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import com.sollan.utils.ThreadUtils;

@Service
public class TimerServiceImpl implements TimerService {
	AtomicLong timeInMilis = new AtomicLong(0);
	
	@Override
	public void startTimer() {
		timeInMilis.set(0);
		Date startTime = new Date();
		Date endTime =  new Date();
		endTime.setTime(1000*/*60**/6);
		System.out.println("started timer");
		ScheduledExecutorService timer = Executors.newScheduledThreadPool(1);
		timer.scheduleAtFixedRate(() -> {
			timeInMilis.set(timeInMilis.addAndGet(1000));
		}, 0, 1, TimeUnit.SECONDS);
		ThreadUtils.runInThread(new Runnable() {
			@Override
			public void run() {
				do{
					startTime.setTime(startTime.getTime()+1000);
				}while(startTime.before(endTime));
			}
		});

		// Date timerDate = new Date();
		// timerDate.setTime(1000 * 60 * 40);
		// System.out.println(timerDate.getTime());

	}

	@Override
	public long getTimeElapsed() {
		return timeInMilis.get();
		
	}
}
