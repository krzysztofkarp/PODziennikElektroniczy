package com.sollan.messages;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

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
	
	@Column(name="message",columnDefinition="LONGTEXT")
	private String message;
	
	private String title;
	
	
	private UserType sender, recipient;
	
	@Column(name = "opened")
	private Boolean opened;
	
	private Date date;


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


	public Long getMessageId() {
		return messageId;
	}


	public void setMessageId(Long messageId) {
		this.messageId = messageId;
	}

	public UserType getRecipient() {
		return recipient;
	}


	public void setRecipient(UserType recipient) {
		this.recipient = recipient;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public Boolean getOpened() {
		return opened;
	}


	public void setOpened(Boolean opened) {
		this.opened = opened;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
