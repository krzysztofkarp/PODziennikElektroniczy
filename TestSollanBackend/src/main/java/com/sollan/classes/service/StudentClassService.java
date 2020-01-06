package com.sollan.classes.service;

import java.util.List;

import com.sollan.classes.model.StudentClass;

public interface StudentClassService {
	
	
	List<StudentClass> getClassesByIds(List<Long> ids);
	List<StudentClass> getAll();
	StudentClass byId(Long id);
	List<StudentClass> byTeacherId(Long id);
	StudentClass save(StudentClass c);
	List<StudentClass> byTeacherAndSubject(Long studentId, Long subjectId);
	StudentClass getClass(Long studentId) ;
	void addStudent(Long classId, Long studentId) throws Exception;
	void addStudents(Long classId, List<Long> ids) throws Exception;
	void addSubjects(Long classId, List<Long> ids) throws Exception;
	void removeStudent(Long classId, Long studentId) throws Exception;
	void addSubject(Long classId, Long subjectId);
	void removeSubject(Long classId, Long subjectId);
	void remove(StudentClass cl);

}
