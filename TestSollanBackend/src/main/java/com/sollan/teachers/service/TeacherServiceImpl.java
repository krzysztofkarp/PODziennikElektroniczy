package com.sollan.teachers.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.teachers.Teacher;
import com.sollan.user.model.UserNotFoundException;

@Service
public class TeacherServiceImpl implements TeacherService {
	
	
	
	@Autowired
	private TeacherDAO dao;

	@Override
	public List<Teacher> getAll() {
		return dao.getAll();
	}

	@Override
	public Teacher getById(String id) {
		try {
			return dao.getById(id);
		} catch (Exception e) {
			return null;
		}
	}
	
	@Override
	public Teacher getByLogin(String login) {
		return dao.getByLogin(login);
	}

}
