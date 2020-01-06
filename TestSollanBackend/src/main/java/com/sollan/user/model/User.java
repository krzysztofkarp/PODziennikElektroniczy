package com.sollan.user.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;

import com.sollan.util.Crypter;

@MappedSuperclass
public class User {
	
	
	@Id
	@GeneratedValue(
	        strategy = GenerationType.IDENTITY
		    )
	private Long id;
	
	private String firstName, secondName, email;
	
	@Column(name="password",columnDefinition="LONGTEXT")
	private String password;
	
	@Column(unique=true)
	private String login;
	
	private UserType type;
	
	@Transient
	private boolean admin = false;
	
	private Date birthdate;
	
	
	public User() {
		
	}
	
	public User(Long id, String name, String surname) {
		this.id = id;
		this.firstName = name;
		this.secondName = surname;				
	}
	
	public User(String name, String surname, UserType type, String login, String password, String email) {
		this.firstName = name;
		this.secondName = surname;
		this.type = type;
		this.login = login;
		this.password = Crypter.getInstance().encrypt(password);
		this.email = email;
	}
	
	public User(Long id, String name, String surname, UserType type, String login, String password, String email) {
		this.id = id;
		this.firstName = name;
		this.secondName = surname;
		this.type = type;
		this.login = login;
		this.password = Crypter.getInstance().encrypt(password);
		this.email = email;
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSecondName() {
		return secondName;
	}

	public void setSecondName(String secondName) {
		this.secondName = secondName;
	}

	public UserType getType() {
		return type;
	}

	public void setType(UserType type) {
		this.type = type;
	}
	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean isAdmin) {
		this.admin = isAdmin;
	}
	
	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}





	public enum UserType {
		TEACHER, STUDENT, PARENT, ADMIN
	}
	
	public String getFullName() {
		return this.firstName + " " + this.secondName;
	}
	
	public void updateFields(User u) {
		if(this.login != u.getLogin())
			this.login = u.getLogin();
		
		if(this.email != u.getEmail())
			this.email = u.getEmail();
		
		if(this.firstName != u.getFirstName())
			this.firstName = u.getFirstName();
		
		if(this.secondName != u.getSecondName())
			this.secondName = u.getSecondName();
	}

}
