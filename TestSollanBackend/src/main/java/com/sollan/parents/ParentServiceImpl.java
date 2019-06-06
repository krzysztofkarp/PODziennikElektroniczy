package com.sollan.parents;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.sollan.students.service.dao.StudentDAO;

public class ParentServiceImpl implements ParentService {
	
	
	@Autowired
	private StudentDAO dao;

	@Override
	public List<Parent> getAll() {
		return dao.getParents();
	}

	@Override
	public List<Parent> getForId(String id) {
		return dao.getParentsForStudent(id);
	}

}
