package com.sollan.students.service.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.generic.GenericDAO;
import com.sollan.parents.Parent;
import com.sollan.students.model.Student;
import com.sollan.user.generator.RandomUserGenerator;

@Service
public class StudentDAO extends GenericDAO<Student>{
	
			
	@Autowired
	private RandomUserGenerator generator;
	
	
	private Map<String, Parent> parentRepository;
		
	
	@PostConstruct
	private void init() {
		parentRepository = new HashMap<>();
		
		generator.getRandomStudentsForClass(15).stream().forEach(s -> {
				repository.put(s.getId(), s);
				assignParent(s);
			});
		
		
		
	}
	
	public List<Student> getByClass(String c){
		return repository.values().stream().filter(s -> s.getClassId().equals(c)).collect(Collectors.toList());
	}
	
	public List<Parent> getParents(){
		return parentRepository.values().stream().collect(Collectors.toList());
	}
	
	public List<Parent> getParentsForStudent(String studentId){
		return parentRepository.values().stream().filter(p -> p.getChildrenIds().contains(studentId)).collect(Collectors.toList());
	}
	
	public Parent getParentByLogin(String login) {
		return parentRepository.values().stream().filter(p -> p.getLogin().equals(login)).findFirst().get();
	}
	
	private void assignParent(Student s) {
		Parent p = generator.getRandomParentForId(s.getId(), s.getSecondName());
		parentRepository.put(p.getId(), p);
	}
	
	

}
