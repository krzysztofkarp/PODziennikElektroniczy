package com.sollan.students.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.mail.MessagingException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.util.Crypter;
import com.sollan.util.email.EmailService;
import com.sollan.util.email.TemplateParam;

@Service
public class StudentServiceImpl implements StudentService {
	
	
	private static final Logger LOGGER = LoggerFactory.getLogger(StudentServiceImpl.class);

	
	
	@Autowired
	private StudentRepository repo;
	
	@Autowired
	private EmailService emailService;
		
	@Override
	public List<Student> getAll() {
		 return StreamSupport.stream(repo.findAll().spliterator(), false)
		    .collect(Collectors.toList());
	}
	
	@Override
	public Student save(Student s) {
		s.setPassword(Crypter.getInstance().encrypt(s.getPassword()));
		notifyUser(s);
		return repo.save(s);
	}
	
	@Override
	public void delete(Long id) {
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
		return Optional.ofNullable(repo.findByUsername(username)).orElse(null);
	}

	@Override
	public  List<Student> byParentId(Long id) {
		return StreamSupport.stream(repo.byParentId(id).spliterator(), false)
			    .collect(Collectors.toList());
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
	
	private void notifyUser(Student s){
		Map<String, Object> props = new HashMap<>();
		props.put(TemplateParam.FIRST_NAME, s.getFirstName());
		props.put(TemplateParam.SECOND_NAME, s.getSecondName());
		props.put(TemplateParam.LOGIN, s.getLogin());
		props.put(TemplateParam.PASSWORD, s.getPassword());
		props.put(TemplateParam.ADMIN, "Administrator");
		try {
			emailService.send("krzysztofskarp@gmail.com", props);
		} catch (MessagingException e) {
			LOGGER.error(e.getMessage());
		}
	
	}
	
	
	
	

	


}
