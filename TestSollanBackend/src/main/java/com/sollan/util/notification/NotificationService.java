package com.sollan.util.notification;

import com.sollan.user.model.User;

public interface NotificationService {
	
	
	void notifyAfterCreation(User u);
	void notifyAfterReset(User u);

}
