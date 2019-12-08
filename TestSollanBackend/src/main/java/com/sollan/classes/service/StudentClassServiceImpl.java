package com.sollan.classes.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sollan.classes.model.StudentClass;
import com.sollan.classes.repo.StudentClassRepository;
import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.util.Utils;

@Service
public class StudentClassServiceImpl implements StudentClassService {
	
	
	@Autowired
	private StudentClassRepository repo;
	
	@Autowired
	private StudentRepository students;
	
	@Override
	public List<StudentClass> getClassesByIds(List<Long> ids) {
		 return StreamSupport.stream(repo.findAllById(ids).spliterator(), false)
				    .collect(Collectors.toList());
	}

	@Override
	public List<StudentClass> getAll() {
		return StreamSupport.stream(repo.findAll().spliterator(), false)
			    .collect(Collectors.toList());
	}
	
	@Override
	public void save(StudentClass c) {
		repo.save(c);
	}

	@Override
	public void addStudent(Long classId, Long studentId) throws Exception {
		StudentClass cl = repo.findById(classId).orElseThrow();
		Student s = students.findById(studentId).orElseThrow();
		
		if(Utils.nullOrEmpty(cl) || Utils.nullOrEmpty(s))
			throw new Exception("Student or class does not exist!");
		
		cl.addStudent(s);
		repo.save(cl);
	}

	@Override
	public void removeStudent(Long classId,Long studentId) {
		StudentClass cl = repo.findById(classId).orElseThrow();
		cl.removeStudent(students.findById(studentId).orElseThrow());
		repo.save(cl);
	}
	
	
	
	
	

}
