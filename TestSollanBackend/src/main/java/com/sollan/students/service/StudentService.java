package com.sollan.students.service;


import java.util.List;

import com.sollan.students.model.Student;
import com.sollan.user.UserService;


public interface StudentService extends UserService<Student>{
	

	List<Student> byParentId(Long id);
	List<Student> byClassId(Long id);
	Long studentCountForClass(Long classId);
	List<Student> byIds(List<Long> ids);
	List<Student> byClassIds(List<Long> ids);
	
	

}
