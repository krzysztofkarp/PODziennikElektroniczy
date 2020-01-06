package com.sollan.subjects.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sollan.classes.model.StudentClass;
import com.sollan.grades.model.Grade;
import com.sollan.teachers.Teacher;

@Entity
@Table(name = "subject")
public class Subject {
	
	
	@Id
	@GeneratedValue(
	        strategy = GenerationType.IDENTITY
		    )
	private Long subjectId;
	
	@Column(unique = true)
	private String name;
	
	
	@ManyToMany(mappedBy = "subjects")
	@JsonIgnore
	private Set<StudentClass> classes = new HashSet<>();
	
	@ManyToMany(mappedBy = "subjects")
	@JsonIgnore
	private Set<Teacher> teachers = new HashSet<>();
	
	
	
	@OneToMany(
			mappedBy = "subject",
	        cascade = CascadeType.PERSIST,
	        orphanRemoval = true)
	private Set<Grade> grades = new HashSet<>();
	
	
	

	public Long getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(Long subjectId) {
		this.subjectId = subjectId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<StudentClass> getClasses() {
		return classes;
	}

	public void setClasses(Set<StudentClass> classes) {
		this.classes = classes;
	}

	public Set<Teacher> getTeachers() {
		return teachers;
	}

	public void setTeachers(Set<Teacher> teachers) {
		this.teachers = teachers;
	}
	
	public void addTeacher(Teacher t) {
		this.teachers.add(t);
		t.addSubject(this);
	}
	
	public void removeTeacher(Teacher t) {
		this.teachers.remove(t);
		t.removeSubject(this);
	}
	
	public void addClass(StudentClass cl) {
		this.classes.add(cl);
		cl.addSubject(this);
	}
	
	public void removeClass(StudentClass cl) {
		this.classes.remove(cl);
		cl.removeSubject(this);
	}
	
	public void addGrade(Grade g) {
		this.grades.add(g);
		g.setSubject(this);
	}
	
	public void removeGrade(Grade g) {
		this.grades.remove(g);
		g.setSubject(null);
	}
	
	
	@Override
	 public boolean equals(Object o) {
	        if (this == o) return true;
	        if (!(o instanceof Subject )) return false;
	        return getSubjectId() != null && getSubjectId().equals(((Subject) o).getSubjectId());
	    }
	 
	 @Override
	 public int hashCode() {
	        return 31;
	  }
	
	
	

	
		


}
	

		


