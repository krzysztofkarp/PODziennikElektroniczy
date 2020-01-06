package com.sollan.user.changePassword;

import com.sollan.user.model.User.UserType;

public interface ChangePasswordService {
	
	
	void changePassword(Long userId, UserType type, ChangePasswordParams params);
	void resetPassword(Long userId, UserType type, String newPassword);

}
