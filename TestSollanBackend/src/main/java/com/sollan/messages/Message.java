package com.sollan.messages;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sollan.parents.model.Parent;
import com.sollan.students.model.Student;
import com.sollan.teachers.Teacher;
import com.sollan.user.model.User.UserType;

@Entity
@Table(name = "message")
public class Message {
	
	@Id
	@GeneratedValue(
	        strategy = GenerationType.IDENTITY
		    )
	private Long messageId;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "student_id")
	@JsonIgnore
	private Student student;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "teacher_id")
	@JsonIgnore
	private Teacher teacher;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parent_id")
	@JsonIgnore
	private Parent parent;
	
	@Column(name="password",columnDefinition="LONGTEXT")
	private String message;
	
	
	private UserType sender;


	public Student getStudent() {
		return student;
	}


	public void setStudent(Student student) {
		this.student = student;
	}


	public Teacher getTeacher() {
		return teacher;
	}


	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}


	public Parent getParent() {
		return parent;
	}


	public void setParent(Parent parent) {
		this.parent = parent;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public UserType getSender() {
		return sender;
	}


	public void setSender(UserType sender) {
		this.sender = sender;
	}
	
	

}
