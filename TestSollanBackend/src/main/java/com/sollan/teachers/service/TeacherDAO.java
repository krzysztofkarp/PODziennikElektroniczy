package com.sollan.teachers.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.generic.GenericDAO;
import com.sollan.teachers.Teacher;
import com.sollan.user.generator.RandomUserGenerator;
import com.sollan.user.generator.UserFieldsGenerator;

@Service
public class TeacherDAO extends GenericDAO<Teacher>{
	
	
	@Autowired
	private RandomUserGenerator generator;
	
	
	@PostConstruct
	private void init() {
		loadTeachers();
	}
	
	private void loadTeachers() {
		List<Teacher> ts = new ArrayList<Teacher>();
		for( String id: UserFieldsGenerator.defaultClasses) {
			ts.addAll(generator.getRandomTeachers(id));
		}
		
		ts.forEach(t -> repository.put(t.getId(), t));
		}
	
	

}
