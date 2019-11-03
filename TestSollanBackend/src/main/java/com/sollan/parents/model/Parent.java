package com.sollan.parents.model;


import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import com.sollan.students.model.Student;
import com.sollan.user.model.User;


@Entity
@Table(name = "parent")
public class Parent extends User {
	
	
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinTable(
			name = "parent_student", 
			joinColumns = @JoinColumn(name = "parent_id"), 
			inverseJoinColumns = @JoinColumn(name = "student_id"))
	private Set<Student> children = new HashSet<>();
	
	
	public Parent() {
		
	}
	
	public Parent(Long id, String firstName, String secondName, String login, String password, String email) {
		super(id, firstName, secondName, UserType.PARENT, login, password, email);
	}
	
	public void addChild(Student s) {
		children.add(s);
		s.getParent().add(this);
	}
	
	public void removeChild(Student s) {
		children.remove(s);
		s.getParent().remove(this);
	}

	

}
