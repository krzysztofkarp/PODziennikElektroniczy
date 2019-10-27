package com.sollan.classes.dao;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.classes.model.StudentClass;
import com.sollan.students.service.StudentService;
import com.sollan.user.generator.UserFieldsGenerator;

@Service
public class StudentClassDAO {
	
	
		
	@Autowired
	private StudentService service;
	
		
	public List<StudentClass> getAll(){
		return getClasses();
	}
	
	public List<StudentClass> getByIds(Collection<String> ids){
		return getClasses().stream().filter(cl -> ids.contains(cl.getClassId())).collect(Collectors.toList());
	}
	
	
	private List<StudentClass> getClasses() {
		String[] classes = UserFieldsGenerator.defaultClasses;
		List<StudentClass> generated = new ArrayList<StudentClass>();
		
		for(String c : classes) {
			
			StudentClass cs = new StudentClass();
			cs.setClassId(c);
			cs.setProfile(UserFieldsGenerator.getProfile(c));
			//cs.setStudents(service.getByClassId(c));
			generated.add(cs);
		}
		
		return generated;
	}

}
