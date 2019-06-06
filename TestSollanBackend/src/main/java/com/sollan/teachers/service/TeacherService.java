package com.sollan.teachers.service;

import java.util.List;

import com.sollan.teachers.Teacher;

public interface TeacherService {
	
	
	List<Teacher> getAll();
	Teacher getById(String id);
	Teacher getByLogin(String login);

}
