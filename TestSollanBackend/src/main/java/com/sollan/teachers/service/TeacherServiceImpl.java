package com.sollan.teachers.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.teachers.Teacher;
import com.sollan.teachers.repo.TeacherRepository;

@Service
public class TeacherServiceImpl implements TeacherService {
	
	
	
	@Autowired
	private TeacherRepository repo;

	@Override
	public List<Teacher> getAll() {
		 return StreamSupport.stream(repo.findAll().spliterator(), false)
				    .collect(Collectors.toList());
	}

	@Override
	public Teacher getById(Long id) {
		return repo.findOne(id);
	}
	
	@Override
	public long count() {
		return repo.count();
	}

	@Override
	public Teacher findByUsername(String username) {
		return Optional.ofNullable(repo.findByUsername(username)).orElse(null);
	}

	@Override
	public void save(Teacher t) {
		repo.save(t);
		
	}

	@Override
	public void delete(Long id) {
		repo.delete(id);
	}

}
