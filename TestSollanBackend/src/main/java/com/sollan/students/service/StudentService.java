package com.sollan.students.service;


import java.util.Set;

import com.sollan.students.model.Student;
import com.sollan.user.UserService;


public interface StudentService extends UserService<Student>{
	

	Set<Student> byParentId(Long id);
	

}
