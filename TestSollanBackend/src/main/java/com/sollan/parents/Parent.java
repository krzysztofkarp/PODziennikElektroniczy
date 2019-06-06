package com.sollan.parents;

import java.util.List;

import com.sollan.user.model.User;

public class Parent extends User {
	
	
	private List<String> childrenIds;
	
	
	
	
	public Parent() {
		
	}
	
	public Parent(String id, String name, String surname, List<String> ids) {
		super(id, name, surname, UserType.PARENT);
		this.childrenIds = ids;
	}

	public List<String> getChildrenIds() {
		return childrenIds;
	}

	public void setChildrenIds(List<String> childrenIds) {
		this.childrenIds = childrenIds;
	}
	
	

}
