package com.sollan.parents.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Transient;

import com.sollan.user.model.User;


@Entity
public class Parent extends User {
	
	
	@Transient
	private List<String> childrenIds;
	
	
	
	
	public Parent() {
		
	}
	
	public Parent(Long id, String firstName, String secondName, String login, String password, String email) {
		super(id, firstName, secondName, UserType.STUDENT, login, password, email);
	}

	public List<String> getChildrenIds() {
		return childrenIds;
	}

	public void setChildrenIds(List<String> childrenIds) {
		this.childrenIds = childrenIds;
	}
	
	

}
