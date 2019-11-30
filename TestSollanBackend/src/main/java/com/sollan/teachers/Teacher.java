package com.sollan.teachers;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.transaction.Transactional;

import com.sollan.classes.model.StudentClass;
import com.sollan.subjects.Subject;
import com.sollan.user.model.User;



@Entity
@Table(name = "teacher")
@Transactional
public class Teacher extends User{
	
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinTable(
			name = "teacher_subject", 
			joinColumns = @JoinColumn(name = "teacher_id"), 
			inverseJoinColumns = @JoinColumn(name = "subject_subjectId"))
	private Set<Subject> subjects = new HashSet<>();
	
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinTable(
			name = "teacher_class", 
			joinColumns = @JoinColumn(name = "teacher_id"), 
			inverseJoinColumns = @JoinColumn(name = "student_class_classId"))
	private Set<StudentClass> classes = new HashSet<>();
	
	
	
	public Teacher() {}
	
	
	
	
	
	public Set<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(Set<Subject> subjects) {
		this.subjects = subjects;
	}

	public void addSubject(Subject s) {
		this.subjects.add(s);
		s.getTeachers().add(this);
	}
	
	public void removeSubject(Subject s) {
		this.subjects.remove(s);
		s.getTeachers().remove(this);
	}
	
	
	
	

}
