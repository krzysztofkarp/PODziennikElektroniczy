package com.sollan.classes.service;

import java.util.Collection;
import java.util.List;

import com.sollan.classes.model.StudentClass;

public interface StudentClassService {
	
	
	List<StudentClass> getClassesByIds(Collection<String> classesIds);
	List<StudentClass> getAll();

}
