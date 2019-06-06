package com.sollan.classes.service;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.classes.dao.StudentClassDAO;
import com.sollan.classes.model.StudentClass;

@Service
public class StudentClassServiceImpl implements StudentClassService {
	
	
	
	@Autowired
	private StudentClassDAO classDAO;

	@Override
	public List<StudentClass> getClassesByIds(Collection<String> classesIds) {
		return classDAO.getByIds(classesIds);
	}
	
	@Override
	public List<StudentClass> getAll(){
		return classDAO.getAll();
	}

}
