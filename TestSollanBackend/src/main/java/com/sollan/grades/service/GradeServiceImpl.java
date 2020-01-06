package com.sollan.grades.service;

import java.util.List;
import java.util.function.Consumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.grades.model.Grade;
import com.sollan.grades.repo.GradeRepository;
import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.students.service.StudentService;
import com.sollan.subjects.model.Subject;
import com.sollan.subjects.service.SubjectService;
import com.sollan.util.Utils;

@Service
public class GradeServiceImpl implements GradeService{
	
	private static final Logger LOG = LoggerFactory.getLogger(GradeServiceImpl.class);
	
	
	@Autowired
	private GradeRepository repo;
	
	@Autowired
	private StudentRepository sRepo;
	
	@Autowired
	private SubjectService subjectService;
	
	
	@Override
	public List<Grade> byStudentId(Long id) {
		return Utils.asList(repo.byStudentId(id));
	}
	
	@Override
	public void addGrade(Grade g, Long studentId, Long subjectId) {
		handleAddRemoveAction(g, studentId, subjectId, (Student st) -> st.addGrade(g), 
				(Subject sb) -> sb.addGrade(g));
	}
	
	@Override
	public void removeGrade(Long gradeId, Long studentId, Long subjectId) {
		Grade g = repo.findById(gradeId).orElseThrow();		
		handleAddRemoveAction(g, studentId, subjectId, (Student st) -> st.removeGrade(g), 
				(Subject sb) -> sb.removeGrade(g));
	}
	
	public void  handleAddRemoveAction(Grade g, Long studentId, Long subjectId, 
			Consumer<Student> studentConsumer,  Consumer<Subject> subjectConsumer) {
		Student s = sRepo.findById(studentId).get();
		Subject sub = subjectService.byId(subjectId);
		studentConsumer.accept(s);
		subjectConsumer.accept(sub);
		sRepo.save(s);
		subjectService.save(sub);
	}

	@Override
	public List<Grade> byStudentAndSubjectId(Long studentId, Long subjectId) {	
		return Utils.asList(repo.byStudentAndSubjectId(studentId, subjectId));
	}
	
	

}
