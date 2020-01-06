package com.sollan.grades.service;

import java.util.List;

import com.sollan.grades.model.Grade;

public interface GradeService {
	
	List<Grade> byStudentId(Long id);
	List<Grade> byStudentAndSubjectId(Long studentId, Long subjectId);
	void addGrade(Grade g, Long studentId, Long subjectId);
	void removeGrade(Long gradeId, Long studentId, Long subjectId);

}
