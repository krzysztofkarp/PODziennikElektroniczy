package com.sollan.students.service;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.parents.Parent;
import com.sollan.students.model.Student;
import com.sollan.students.service.dao.StudentDAO;

@Service
public class StudentServiceImpl implements StudentService {
	
	
	@Autowired
	private StudentDAO dao;

	@Override
	public List<Student> getAll() {
		return dao.getAll();
	}

	@Override
	public Student update(Student s) throws Exception {
		dao.update(s);
		return dao.getById(s.getId());
	}
	
	@Override
	public Student getById(String id){
		return dao.getById(id);
	}
	
	@Override
	public List<Student> getByIds(Collection<String> ids){
		return dao.getByIds(ids);
	}
	
	@Override
	public Student getByLogin(String login) {
		return dao.getByLogin(login);
	}
	
	@Override
	public Parent getParentByLogin(String login) {
		return dao.getParentByLogin(login);
	}
	
	@Override 
	public List<Parent> getParents(){
		return dao.getParents();
	}
	
	@Override
	public List<Student> getByClassId(String classId){
		return dao.getByClass(classId);
	}

}
