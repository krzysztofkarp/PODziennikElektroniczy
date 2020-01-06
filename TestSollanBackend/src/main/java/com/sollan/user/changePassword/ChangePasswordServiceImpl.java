package com.sollan.user.changePassword;

import java.security.InvalidParameterException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.parents.service.ParentService;
import com.sollan.students.service.StudentService;
import com.sollan.teachers.service.TeacherService;
import com.sollan.user.model.User;
import com.sollan.user.model.User.UserType;
import com.sollan.util.Crypter;
import com.sollan.util.Utils;
import com.sollan.util.notification.NotificationService;


@Service
public class ChangePasswordServiceImpl implements ChangePasswordService {
	
	private StudentService sService;
	private TeacherService tService;
	private ParentService pService;
	private NotificationService notifyService;
	
	
	@Autowired
	public ChangePasswordServiceImpl(StudentService sService, TeacherService tService, ParentService pService, NotificationService notifyService) {
		this.sService = sService;
		this.tService = tService;
		this.pService = pService;
		this.notifyService = notifyService;
	}
	

	@Override
	public void changePassword(Long userId, UserType type, ChangePasswordParams params) {
		change(userId, type, params);
	}
	
	private void change(Long id, UserType type, ChangePasswordParams params) {
		User u;
		switch(type) {
			case STUDENT:  
				u = sService.getById(id);
				performValidation(u, params);
				sService.changePassword(u.getId(), Crypter.getInstance().encrypt(params.getNewPassword()));
				break;
			case TEACHER:
				u = tService.getById(id);
				performValidation(u, params);
				tService.changePassword(u.getId(), Crypter.getInstance().encrypt(params.getNewPassword()));
				break;
			case PARENT: 
				u = pService.getById(id);
				performValidation(u, params);
				pService.changePassword(u.getId(), Crypter.getInstance().encrypt(params.getNewPassword()));
				break;
			case ADMIN:
				break;
		}
	}
	
	private void performValidation(User u, ChangePasswordParams params) {
		String p = Crypter.getInstance().decrypt(u.getPassword());
		
		Utils.throwIfCondition(!p.equals(params.getOldPassword()),
				() -> new RuntimeException("Old password not valid"));
		
		
		Utils.throwIfCondition(!params.getNewPassword().equals(params.getRepeatPassword()), 
				() -> new InvalidParameterException("Passwords not equal"));
		
	}
	
	
	@Override
	public void resetPassword(Long id, UserType type, String newPassword) {
		User u;
		switch(type) {
		case STUDENT:  
			u = sService.getById(id);
			sService.changePassword(u.getId(), Crypter.getInstance().encrypt(newPassword));
			notify(u, newPassword);
			break;
		case TEACHER:
			u = tService.getById(id);
			tService.changePassword(u.getId(), Crypter.getInstance().encrypt(newPassword));
			notify(u, newPassword);
			break;
		case PARENT: 
			u = pService.getById(id);
			pService.changePassword(u.getId(), Crypter.getInstance().encrypt(newPassword));
			notify(u, newPassword);
			break;
		case ADMIN:
			break;
		}
	}
	
	private void notify(User u, String newPassword) {
		u.setPassword(newPassword);
		notifyService.notifyAfterReset(u);
	}
	

}
