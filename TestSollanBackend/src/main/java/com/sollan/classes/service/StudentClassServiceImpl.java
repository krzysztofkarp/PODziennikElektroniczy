package com.sollan.classes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.classes.model.StudentClass;
import com.sollan.classes.model.teacherClass.TeacherClassRepository;
import com.sollan.classes.repo.StudentClassRepository;
import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.subjects.model.Subject;
import com.sollan.subjects.service.SubjectService;
import com.sollan.util.Utils;

@Service
public class StudentClassServiceImpl implements StudentClassService {
	
	
	@Autowired
	private StudentClassRepository repo;
	
	@Autowired
	private StudentRepository students;
	
	@Autowired
	private SubjectService subjectService;
	
	@Autowired
	private TeacherClassRepository tcRepo;
	
	@Override
	public List<StudentClass> getClassesByIds(List<Long> ids) {
		 return Utils.asList(repo.findAllById(ids));
	}

	@Override
	public List<StudentClass> getAll() {
		List<StudentClass> all = Utils.asList(repo.findAll());
		all.forEach(cl -> cl.setNumberOfStudents(students.countForClass(cl.getClassId())));
		return all;
	}
	
	@Override
	public StudentClass save(StudentClass c) {
		return repo.save(c);
	}

	@Override
	public void addStudent(Long classId, Long studentId) throws Exception {
		if(repo.existsById(classId)) {
			StudentClass cl = repo.findById(classId).get();
			Student s = students.findById(studentId).get();
			cl.addStudent(s);
			repo.save(cl);
		}
	}

	@Override
	public void removeStudent(Long classId,Long studentId) {
		if(repo.existsById(classId)) {
			StudentClass cl = repo.findById(classId).get();
			cl.removeStudent(students.findById(studentId).orElseThrow());
			repo.save(cl);
		}
	}
	
	@Override
	public void addSubject(Long classId, Long subjectId) {
		Subject sub = subjectService.byId(subjectId);
		StudentClass cl = repo.findById(classId).orElseThrow();
		cl.addSubject(sub);
		repo.save(cl);
		
	}
	
	@Override
	public void removeSubject(Long classId, Long subjectId) {
		Subject sub = subjectService.byId(subjectId);
		StudentClass cl = repo.findById(classId).orElseThrow();
		cl.removeSubject(sub);
		repo.save(cl);
		tcRepo.removeBySubjectAndId(sub.getName(), classId);
	}

	@Override
	public List<StudentClass> byTeacherId(Long id) {
		return Utils.asList(repo.byTeacherId(id));
	}
	
	@Override
	public StudentClass getClass(Long studentId) {
		return students.getClass(studentId);
	}

	@Override
	public void remove(StudentClass cl) {
		StudentClass cls = repo.findById(cl.getClassId()).get();
		cls.getStudents().forEach(s -> s.setStudentClass(null));
		repo.save(cls);
		repo.delete(cl);
		
	}

	@Override
	public void addStudents(Long classId, List<Long> ids) throws Exception {
		if(repo.existsById(classId)) {
		List<Student> ss = Utils.asList(students.findAllById(ids));
		StudentClass cl = repo.findById(classId).get();
		ss.forEach(s -> cl.addStudent(s));
		repo.save(cl);
		}
		
	}
	
	@Override
	public void addSubjects(Long classId, List<Long> ids) throws Exception {
		if(repo.existsById(classId)) {
		List<Subject> ss = subjectService.byIds(ids);
		StudentClass cl = repo.findById(classId).get();
		ss.forEach(s -> cl.addSubject(s));
		repo.save(cl);
		}
		
	}

	@Override
	public StudentClass byId(Long id) {
		return repo.findById(id).get();
	}

	@Override
	public List<StudentClass> byTeacherAndSubject(Long teacherId, Long subjectId) {
		return Utils.asList(repo.bySubjectAndTeacher(teacherId, subjectId));
	}
	
	
	
	
	

}
