package com.sollan.teachers.service;

import java.util.List;

import com.sollan.teachers.Teacher;
import com.sollan.user.UserService;

public interface TeacherService extends UserService<Teacher>{
	
	
	void addSubject(Long subjectId, Long teacherId);
	void removeSubject(Long subjectId, Long teacherId);
	void addMultipleSubjects(List<Long> ids, Long teacherId);
	void removeMultipleSubjects(List<Long> ids, Long teacherId);
	void addClass(Long classId, Long teacherId, String subjectName);
	void removeClass(Long classId, Long teacherId, String subjectName);
	List<Teacher> bySubjectId(Long subjectId);
	Teacher byClassAndSubject(Long classId, Long subjectId);

}
