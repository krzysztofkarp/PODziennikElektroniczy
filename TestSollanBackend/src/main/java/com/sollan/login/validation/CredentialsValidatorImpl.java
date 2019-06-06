package com.sollan.login.validation;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.students.service.StudentService;
import com.sollan.teachers.service.TeacherService;
import com.sollan.user.model.User;
import com.sollan.user.model.User.UserType;
import com.sollan.util.Response;

@Service
public class CredentialsValidatorImpl implements CredentialsValidator {
	
	
	
	@Autowired
	private StudentService students;
	
	@Autowired
	private TeacherService teachers;
	
	
	
	@Override
	public Response<User> validate(String login, String password) {
		Response<User> resp = new Response<>();
		resp.setItem(validateCredentials(login, password));
		return resp;
	}
	
	
	
	private User validateCredentials(String login, String password) {
	
		
		
		User u = byLogin(login);
		
		if(u != null && u.getPassword().equals(password)) {
			return u;
		}
		
		return null;
	}
	
	private User byLogin(String login) {
		UserType type = User.typeByPrefix(login);
		User u = null;
		switch(type) {
			case STUDENT: u = students.getByLogin(login); break;
			case TEACHER: u = teachers.getByLogin(login); break;
			case PARENT: u = students.getParentByLogin(login); break;
		}
		
		return u;
	}

}
