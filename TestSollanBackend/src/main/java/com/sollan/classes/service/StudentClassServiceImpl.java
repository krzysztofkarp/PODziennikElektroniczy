package com.sollan.classes.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sollan.classes.model.StudentClass;
import com.sollan.classes.repo.StudentClassRepository;

@Service
public class StudentClassServiceImpl implements StudentClassService {
	
	
	@Autowired
	private StudentClassRepository repo;
	
	@Override
	public List<StudentClass> getClassesByIds(List<Long> ids) {
		 return StreamSupport.stream(repo.findAll(ids).spliterator(), false)
				    .collect(Collectors.toList());
	}

	@Override
	public List<StudentClass> getAll() {
		return StreamSupport.stream(repo.findAll().spliterator(), false)
			    .collect(Collectors.toList());
	}
	
	
	

}
