package com.sollan.subjects.service;

import java.util.List;

import com.sollan.subjects.model.Subject;

public interface SubjectService {
	
	List<Subject> getAll();
	Subject byId(Long id);
	List<Subject> byIds(List<Long> ids);
	Subject save(Subject s);
	void delete(Subject s);
	List<Subject> byTeacherId(Long teacherId);
	List<Subject> byClassId(Long classId);

}
