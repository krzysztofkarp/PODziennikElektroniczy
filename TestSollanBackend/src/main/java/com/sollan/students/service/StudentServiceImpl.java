package com.sollan.students.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {
	
	
	@Autowired
	private StudentRepository repo;
		
	@Override
	public List<Student> getAll() {
		 return StreamSupport.stream(repo.findAll().spliterator(), false)
		    .collect(Collectors.toList());
	}
	
	@Override
	public void save(Student s) {
		repo.save(s);
	}
	
	@Override
	public void delete(Long id) {
		repo.delete(id);
	}

	@Override
	public Student getById(Long id) {
		return repo.findOne(id);
	}

	@Override
	public long count() {
		return repo.count();
	}

	@Override
	public Student findByUsername(String username) {
		return Optional.ofNullable(repo.findByUsername(username)).orElse(null);
	}
	
	

	


}
