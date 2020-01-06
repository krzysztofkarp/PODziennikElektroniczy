package com.sollan.parents.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.parents.model.Parent;
import com.sollan.parents.repo.ParentRepository;
import com.sollan.students.model.Student;
import com.sollan.students.service.StudentService;
import com.sollan.teachers.Teacher;
import com.sollan.user.model.User;
import com.sollan.util.Crypter;
import com.sollan.util.Utils;
import com.sollan.util.notification.NotificationService;

@Service
public class ParentServiceImpl implements ParentService {
	
	
	@Autowired
	private ParentRepository repo;
	
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private NotificationService notification;
	
	@Override
	public User findByUsername(String username) {
		return repo.findByUsername(username);
	}

	@Override
	public List<Parent> getAll() {
		 return StreamSupport.stream(repo.findAll().spliterator(), false)
				    .collect(Collectors.toList());
	}

	@Override
	public Parent save(Parent t) {
		if(Utils.nullOrEmpty(t.getId())) {
			t.setPassword(Crypter.getInstance().encrypt(t.getPassword()));
			Parent saved = repo.save(t);
			notification.notifyAfterCreation(saved);
			return saved;
		} else {
			Parent toUpdate = repo.findById(t.getId()).get();
			toUpdate.updateFields(t);
			Parent saved = repo.save(toUpdate);
			return saved;
		}
		
	}

	@Override
	public void delete(Long id) {
		repo.deleteById(id);
		
	}

	@Override
	public Parent getById(Long id) {
		return repo.findById(id).get();
	}

	@Override
	public long count() {
		return repo.count();
	}

	@Override
	public void addChildren(List<Long> ids, Long parentId) {
		List<Student> childs = studentService.byIds(ids);
		Parent p = repo.findById(parentId).get();
		childs.forEach(ch -> p.addChild(ch));
		repo.save(p);
		
	}
	
	@Override
	public void changePassword(Long userId, String newPassword) {
		repo.updatePassword(userId, newPassword);
	}
	
	
	

}
