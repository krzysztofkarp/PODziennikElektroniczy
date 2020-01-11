package com.sollan.students.model;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sollan.classes.model.StudentClass;
import com.sollan.grades.model.Grade;
import com.sollan.messages.Message;
import com.sollan.notes.model.Note;
import com.sollan.parents.model.Parent;
import com.sollan.user.model.User;



@Entity
@Table(name = "student")
public class Student extends User{

	
	@ManyToMany(mappedBy = "children")
	private Set<Parent> parents;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "studentClass_classId")
	@JsonIgnore
	private StudentClass studentClass;
	
	
	@OneToMany(
			mappedBy = "student",
	        cascade = CascadeType.PERSIST,
	        orphanRemoval = true)
	private Set<Grade> grades = new HashSet<>();
	
	@OneToMany(
			mappedBy = "student",
	        cascade = CascadeType.PERSIST,
	        orphanRemoval = true)
	private Set<Note> notes = new HashSet<>();
	
	
	@OneToMany(
			mappedBy = "student",
	        cascade = CascadeType.PERSIST,
	        orphanRemoval = true)
	private Set<Message> messages = new HashSet<>();
	
	
	public Student() {
		
	}
	
	public Student(String firstName, String secondName, String login, String password, String email) {
		super(firstName, secondName, UserType.STUDENT, login, password, email);
	}
	
	
	
	public Student(Long id, String firstName, String secondName, String login, String password, String email) {
		super(id, firstName, secondName, UserType.STUDENT, login, password, email);
	}

	public Set<Parent> getParent() {
		return parents;
	}

	public void setParent(Set<Parent> parents) {
		this.parents = parents;
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
		g.setStudent(null);
	}
	
	public void addNote(Note n) {
		this.notes.add(n);
		n.setStudent(this);
	}
	
	public void removeNote(Note n) {
		this.notes.remove(n);
		n.setStudent(null);
	}
	
	public void addMessage(Message m) {
		this.messages.add(m);
		m.setStudent(this);
	}
	
	public void removeMessage(Message m) {
		this.messages.remove(m);
		m.setStudent(null);
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
