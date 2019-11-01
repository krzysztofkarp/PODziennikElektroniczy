package com.sollan.parents.model;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.sollan.students.model.Student;
import com.sollan.user.model.User;


@Entity
@Table(name = "parent")
public class Parent extends User {
	
	
	
	@OneToMany(
			mappedBy = "parent",
	        cascade = CascadeType.ALL,
	        orphanRemoval = true)
	private Set<Student> children = new HashSet<>();
	
	
	public Parent() {
		
	}
	
	public Parent(Long id, String firstName, String secondName, String login, String password, String email) {
		super(id, firstName, secondName, UserType.PARENT, login, password, email);
	}
	
	public void addChild(Student s) {
		children.add(s);
		s.setParent(this);
	}
	
	public void removeChild(Student s) {
		children.remove(s);
		s.setParent(this);
	}

	

}
