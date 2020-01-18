package com.sollan.grades.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sollan.grades.model.Grade;
import com.sollan.grades.repo.GradeRepository;
import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.subjects.model.Subject;
import com.sollan.subjects.service.SubjectService;
import com.sollan.util.Utils;

@Service
public class GradeServiceImpl implements GradeService{
		
	
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
		Student s = sRepo.findById(studentId).get();
		Subject sub = subjectService.byId(subjectId);
		g.setStudent(s);
		g.setSubject(sub);
		repo.save(g);
	}
	
	@Override
	public void removeGrade(Long gradeId, Long studentId, Long subjectId) {	
		repo.deleteById(gradeId);
	}
	
	@Override
	public List<Grade> byStudentAndSubjectId(Long studentId, Long subjectId) {	
		return Utils.asList(repo.byStudentAndSubjectId(studentId, subjectId));
	}
	
	

}
