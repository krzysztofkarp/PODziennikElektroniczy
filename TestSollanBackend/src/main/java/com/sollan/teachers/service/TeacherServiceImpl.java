package com.sollan.teachers.service;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.classes.model.StudentClass;
import com.sollan.classes.model.teacherClass.TeacherClass;
import com.sollan.classes.model.teacherClass.TeacherClassRepository;
import com.sollan.classes.service.StudentClassService;
import com.sollan.subjects.model.Subject;
import com.sollan.subjects.service.SubjectService;
import com.sollan.teachers.Teacher;
import com.sollan.teachers.repo.TeacherRepository;
import com.sollan.util.Crypter;
import com.sollan.util.Utils;
import com.sollan.util.notification.NotificationService;

@Service
public class TeacherServiceImpl implements TeacherService {
	
	
	
	@Autowired
	private TeacherRepository repo;
	
	@Autowired
	private TeacherClassRepository tcRepo;
	
	@Autowired
	private SubjectService subService;
	
	@Autowired
	private StudentClassService classService;
	
	@Autowired
	private NotificationService notification;
	
	@Override
	public List<Teacher> getAll() {
		List<Teacher> ts= StreamSupport.stream(repo.findAll().spliterator(), false)
				    .collect(Collectors.toList());
		ts.forEach(t -> t.setSubjects(new HashSet<>()));
		return ts;
	}

	@Override
	public Teacher getById(Long id) {
		return repo.findById(id).get();
	}
	
	@Override
	public long count() {
		return repo.count();
	}

	@Override
	public Teacher findByUsername(String username) {
		return repo.findByUsername(username);
	}

	@Override
	public Teacher save(Teacher t) {
		if(Utils.nullOrEmpty(t.getId())) {
			t.setPassword(Crypter.getInstance().encrypt(t.getPassword()));
			Teacher saved = repo.save(t);
			notification.notifyAfterCreation(saved);
			return saved;
		} else {
			Teacher toUpdate = repo.findById(t.getId()).get();
			toUpdate.updateFields(t);
			Teacher saved = repo.save(toUpdate);
			return saved;
		}
	}

	@Override
	public void delete(Long id) {	
		tcRepo.removeByTeacherId(id);
		repo.deleteById(id);
	}

	@Override
	public void addSubject(Long subjectId, Long teacherId) {
		Subject sub = subService.byId(subjectId);
		Teacher t = repo.findById(teacherId).get();
		t.addSubject(sub);
		repo.save(t);
	}

	@Override
	public void removeSubject(Long subjectId, Long teacherId) {
		Subject sub = subService.byId(subjectId);
		Teacher t = repo.findById(teacherId).get();
		t.removeSubject(sub);
		repo.save(t);
		
	}

	@Override
	public void addMultipleSubjects(List<Long> ids, Long teacherId) {
		List<Subject> subjects = subService.byIds(ids);
		Teacher t = repo.findById(teacherId).get();
		t.setSubjects(new HashSet<Subject>());
		subjects.forEach(sub -> t.addSubject(sub));
		repo.save(t);
	}

	@Override
	public void removeMultipleSubjects(List<Long> ids, Long teacherId) {
		List<Subject> subjects = subService.byIds(ids);
		Teacher t = repo.findById(teacherId).get();
		t.removeSubjects(subjects);
		repo.save(t);
		
	}

	@Override
	public void addClass(Long classId, Long teacherId, String subjectName) {
		StudentClass cl = classService.byId(classId);
		Teacher t = repo.findById(teacherId).get();
		TeacherClass tc = new TeacherClass(t, cl, subjectName);
		t.addClass(tc);
		tcRepo.save(tc);
		
	}
	
	@Override
	public void removeClass(Long classId, Long teacherId, String subjectName) {
		StudentClass cl = classService.byId(classId);
		Teacher t = repo.findById(teacherId).get();
		t.addClass(new TeacherClass(t, cl, subjectName));
		repo.save(t);
		
	}

	@Override
	public List<Teacher> bySubjectId(Long subjectId) {
		return Utils.asList(repo.bySubject(subjectId));
	}

	@Override
	public Teacher byClassAndSubject(Long classId, Long subjectId) {
		Subject sub = subService.byId(subjectId);
		return repo.byClassAndSubject(subjectId, classId, sub.getName());
	}

	@Override
	public void changePassword(Long userId, String newPassword) {
		repo.updatePassword(userId, newPassword);
	}

}
