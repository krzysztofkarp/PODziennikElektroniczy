package com.sollan.grades.service;

import java.util.Set;

import com.sollan.grades.model.Grade;

public interface GradeService {
	
	Set<Grade> byStudentId(Long id);

}
