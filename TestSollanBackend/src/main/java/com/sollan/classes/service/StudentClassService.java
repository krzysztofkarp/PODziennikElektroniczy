package com.sollan.classes.service;

import java.util.List;

import com.sollan.classes.model.StudentClass;

public interface StudentClassService {
	
	
	List<StudentClass> getClassesByIds(List<Long> ids);
	List<StudentClass> getAll();
	void save(StudentClass c);
	void addStudent(Long classId, Long studentId) throws Exception;

}
