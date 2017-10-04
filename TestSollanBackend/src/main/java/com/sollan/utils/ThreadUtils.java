package com.sollan.utils;

import java.util.UUID;

public class ThreadUtils {
	
	public static Thread runInThread(Runnable task) {
		return runInThread(task, "SollanTest-Thread-" + UUID.randomUUID().toString());
	}

	public static Thread runInThread(Runnable task, String threadName) {
		Thread thread = new Thread(task, threadName);
		thread.start();
		return thread;
	}

	
}
