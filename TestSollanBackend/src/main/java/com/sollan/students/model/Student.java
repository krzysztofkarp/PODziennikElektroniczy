package com.sollan.students.model;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sollan.classes.model.StudentClass;
import com.sollan.grades.model.Grade;
import com.sollan.parents.model.Parent;
import com.sollan.user.model.User;



@Entity
@Table(name = "student")
public class Student extends User{

	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parent_id")
	@JsonIgnore
	private Parent parent;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "studentClass_classId")
	@JsonIgnore
	private StudentClass studentClass;
	
	
	@OneToMany(
			mappedBy = "student",
	        cascade = CascadeType.PERSIST,
	        orphanRemoval = true)
	private Set<Grade> grades = new HashSet<>();
	
	
	public Student() {
		
	}
	
	public Student(String firstName, String secondName, String login, String password, String email) {
		super(firstName, secondName, UserType.STUDENT, login, password, email);
	}
	
	
	
	public Student(Long id, String firstName, String secondName, String login, String password, String email) {
		super(id, firstName, secondName, UserType.STUDENT, login, password, email);
	}

	public Parent getParent() {
		return parent;
	}

	public void setParent(Parent parent) {
		this.parent = parent;
	}
	
	public StudentClass getStudentClass() {
		return studentClass;
	}

	public void setStudentClass(StudentClass studentClass) {
		this.studentClass = studentClass;
	}
	
	public void addGrade(Grade g) {
		this.grades.add(g);
		g.setStudent(this);
	}
	
	public void removeGrade(Grade g) {
		this.grades.remove(g);
		g.setStudent(this);
	}
	

	@Override
	 public boolean equals(Object o) {
	        if (this == o) return true;
	        if (!(o instanceof Student )) return false;
	        return getId() != null && getId().equals(((Student) o).getId());
	    }
	 
	 @Override
	 public int hashCode() {
	        return 31;
	  }
	
}
