package com.sollan.teachers;

import java.util.List;
import java.util.Random;

import com.sollan.subjects.Subjects.Subject;
import com.sollan.user.model.User;



public class Teacher extends User{
	
	private int age, experience;
	private boolean isHeadTeacher;
	private List<Subject> subjects;
	private List<String> classesIds;
	private Random rand = new Random();
	int minAge = 26;
	int maxAge = 65;
	
	
	
	public Teacher() {}
	
	public Teacher(String id, String name, String surname, boolean isHead, List<Subject> subjects, List<String> ids) {
		super(id, name, surname, UserType.TEACHER);
		this.age = rand.nextInt((maxAge - minAge) + 1) + minAge;
		this.experience = this.age - 25;
		this.isHeadTeacher = isHead;
		this.subjects = subjects;
		this.classesIds = ids;
	}
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public boolean isHeadTeacher() {
		return isHeadTeacher;
	}
	public void setHeadTeacher(boolean isHeadTeacher) {
		this.isHeadTeacher = isHeadTeacher;
	}
	public List<Subject> getSubjects() {
		return subjects;
	}
	public void setSubjects(List<Subject> subjects) {
		this.subjects = subjects;
	}

	public List<String> getClassesIds() {
		return classesIds;
	}

	public void setClassesIds(List<String> classesIds) {
		this.classesIds = classesIds;
	}

	
	
	
	

}
