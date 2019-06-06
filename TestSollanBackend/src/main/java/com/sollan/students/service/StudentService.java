package com.sollan.students.service;

import java.util.Collection;
import java.util.List;

import com.sollan.parents.Parent;
import com.sollan.students.model.Student;


public interface StudentService {
	
	
	List<Student> getAll();
	Student update(Student s) throws Exception;
	Student getById(String id);
	List<Student> getByIds(Collection<String> ids);
	Student getByLogin(String login);
	Parent getParentByLogin(String login);
	List<Parent> getParents();
	List<Student> getByClassId(String classId);
	

}
