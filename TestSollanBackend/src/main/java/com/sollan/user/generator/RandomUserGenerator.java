package com.sollan.user.generator;

import java.util.List;

import com.sollan.parents.model.Parent;
import com.sollan.students.model.Student;
import com.sollan.teachers.Teacher;

public interface RandomUserGenerator {
	
	
	List<Student> getRandomStudents(int amount);
	List<Student> getRandomStudents(int amount, String classId);
	List<Student> getRandomStudentsForClass(int amount);
	List<Teacher> getRandomTeachers(String classId);
	Parent getRandomParentForId(String childId, String surname);
	

}
