package com.sollan.students.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.util.Crypter;
import com.sollan.util.Utils;
import com.sollan.util.notification.NotificationService;

@Service
public class StudentServiceImpl implements StudentService {
	
	
	
	@Autowired
	private StudentRepository repo;
	
	@Autowired
	private NotificationService notification;
		
	@Override
	public List<Student> getAll() {
		 return Utils.asList(repo.findAll());
	}
	
	@Override
	public Student save(Student s) {
		if(Utils.nullOrEmpty(s.getId())) {
			s.setPassword(Crypter.getInstance().encrypt(s.getPassword()));
			Student saved = repo.save(s);
			notification.notifyAfterCreation(saved);
			return saved;
		} else {
			Student toUpdate = repo.findById(s.getId()).get();
			toUpdate.updateFields(s);
			Student saved = repo.save(toUpdate);
			return saved;
		}
		
		
	
		
	
	}
	
	@Override
	public void delete(Long id) {
		Student s = repo.findById(id).get();		
		s.getParent().forEach(p -> p.removeChild(s));
		repo.save(s);
		repo.deleteById(id);
	}

	@Override
	public Student getById(Long id) {
		return repo.findById(id).orElseThrow();
	}

	@Override
	public long count() {
		return repo.count();
	}

	@Override
	public Student findByUsername(String username) {
		return repo.findByUsername(username);
	}

	@Override
	public  List<Student> byParentId(Long id) {
		return Utils.asList(repo.byParentId(id));
	}

	@Override
	public Long studentCountForClass(Long classId) {
		return repo.countForClass(classId);
	}

	@Override
	public List<Student> byClassId(Long id) {
		return StreamSupport.stream(repo.byClassId(id).spliterator(), false)
			    .collect(Collectors.toList());
	}

	@Override
	public List<Student> byIds(List<Long> ids) {
		return Utils.asList(repo.findAllById(ids));
	}
	
	@Override
	public void changePassword(Long userId, String newPassword) {
		repo.updatePassword(userId, newPassword);
	}
	

	@Override
	public List<Student> byClassIds(List<Long> ids) {
		List<Student> students = new ArrayList<>();
		ids.forEach(id ->{
			students.addAll(repo.byClassId(id));
		});
		
		return students;
	}
	
	
	
	

}
