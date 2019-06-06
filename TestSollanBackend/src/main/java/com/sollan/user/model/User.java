package com.sollan.user.model;



public abstract class User {
	
	protected String id, firstName, secondName, login, password, email;
	protected UserType type;
	private static String studentPrefix = "S_";
	private static String teacherPrefix = "T_";
	private static String parentPrefix = "P_";
	private static String passwordPostfix = "123!";
	
	
	public User() {
		
	}
	
	public User(String id, String name, String surname, UserType type) {
		this.id = id;
		this.firstName = name;
		this.secondName = surname;
		this.type = type;
		generateLoginAndInitPassword();
	}
	
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
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

	public enum UserType {
		TEACHER, STUDENT, PARENT
	}
	
	private void generateLoginAndInitPassword() {
		this.login = getPrefixForType() + this.firstName.toLowerCase() + "_" + this.secondName.toLowerCase();
		this.password = this.secondName.toLowerCase() + passwordPostfix;
	}
	
	private String getPrefixForType() {
		String prefix = "X_";
		
		switch(this.type) {
			case STUDENT: prefix = studentPrefix; break;
			case TEACHER: prefix = teacherPrefix; break;
			case PARENT: prefix = parentPrefix; break;
		}
		
	return prefix;
	}
	
	public static UserType typeByPrefix(String login) {
			if(login.startsWith(studentPrefix))
				return UserType.STUDENT;
			
			if(login.startsWith(teacherPrefix))
				return UserType.TEACHER;
			
			if(login.startsWith(parentPrefix))
				return UserType.PARENT;
			
			return null;
			
	}
	
	public String getFullName() {
		return this.firstName + " " + this.secondName;
	}

}
