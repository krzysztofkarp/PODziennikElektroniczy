package com.sollan.teachers;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Transient;

import com.sollan.subjects.Subjects.Subject;
import com.sollan.user.model.User;



@Entity
public class Teacher extends User{
	
	private int age, experience;
	@Transient
	private List<Subject> subjects;
	@Transient
	private List<String> classesIds;
		
	
	public Teacher() {}
	
	public Teacher(Long id, String firstName, String secondName, String login, String password, String email) {
		super(id, firstName, secondName, UserType.TEACHER, login, password, email);
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
