package com.sollan.classes.model;

import java.util.List;

import com.sollan.students.model.Student;
import com.sollan.teachers.Teacher;

public class StudentClass {
	
	
	
	private String classId;
	private int studentsAmount;
	private Teacher headTeacher;
	private ClassProfile profile;
	private List<Student> students;
	
	public String getClassId() {
		return classId;
	}
	public void setClassId(String classId) {
		this.classId = classId;
	}
	public int getStudentsAmount() {
		return studentsAmount;
	}

	public Teacher getHeadTeacher() {
		return headTeacher;
	}
	public void setHeadTeacher(Teacher headTeacher) {
		this.headTeacher = headTeacher;
	}
	
	public ClassProfile getProfile() {
		return profile;
	}
	public void setProfile(ClassProfile profile) {
		this.profile = profile;
	}
	
	public List<Student> getStudents() {
		return students;
	}
	public void setStudents(List<Student> students) {
		this.students = students;
		this.studentsAmount = students.size();
	}








	public enum ClassProfile{
		
		MAT_INF, HUMAN, MAT_GEO, BIOL_CHEM, DEFAULT
		
	}
	
	

}
