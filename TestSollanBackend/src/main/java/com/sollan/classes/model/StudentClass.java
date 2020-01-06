package com.sollan.classes.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sollan.classes.model.teacherClass.TeacherClass;
import com.sollan.students.model.Student;
import com.sollan.subjects.model.Subject;

@Entity
@Table(name = "student_class")
public class StudentClass {
	
	
	@Id
	@GeneratedValue(
	        strategy = GenerationType.IDENTITY
		    )
	private Long classId;
	
	@Column(unique=true)
	private String name;
	
	
	@OneToMany(
	mappedBy = "studentClass",
	fetch = FetchType.EAGER,
	cascade = CascadeType.ALL,
    orphanRemoval = false)
	@JsonIgnore
	private Set<Student> students = new HashSet<>();
	
	 @OneToMany(
		        mappedBy = "teacherClass",
		        cascade = CascadeType.ALL,
		        orphanRemoval = false
		    )
	@JsonIgnore
	private Set<TeacherClass> teachers = new HashSet<>();
	
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinTable(
			name = "studentClass_subject", 
			joinColumns = @JoinColumn(name = "studentClass_classId"), 
			inverseJoinColumns = @JoinColumn(name = "subject_subjectId"))
	@JsonIgnore
	private Set<Subject> subjects = new HashSet<>();
	
	private ClassProfile profile;
	
	
	@Transient
	private Long numberOfStudents;
	
	
	
	public Long getClassId() {
		return classId;
	}

	public void setClassId(Long classId) {
		this.classId = classId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Student> getStudents() {
		return students;
	}

	public void setStudents(Set<Student> students) {
		this.students = students;
	}

	public ClassProfile getProfile() {
		return profile;
	}

	public void setProfile(ClassProfile profile) {
		this.profile = profile;
	}
	
	public Long getNumberOfStudents() {
		return numberOfStudents;
	}

	public void setNumberOfStudents(Long numberOfStudents) {
		this.numberOfStudents = numberOfStudents;
	}
	
	public void addStudent(Student s) {
		this.students.add(s);
		s.setStudentClass(this);
	}
	
	public void removeStudent(Student s) {
		this.students.remove(s);
		s.setStudentClass(this);
	}
	
	public void addSubject(Subject s) {
		this.subjects.add(s);
		s.getClasses().add(this);
	}
	
	public void removeSubject(Subject s) {
		this.subjects.remove(s);
		s.getClasses().remove(this);
	}
	
	public Set<TeacherClass> getTeachers() {
		return teachers;
	}

	public void setTeachers(Set<TeacherClass> teachers) {
		this.teachers = teachers;
	}

	public Set<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(Set<Subject> subjects) {
		this.subjects = subjects;
	}






	public enum ClassProfile{
		
		MAT_INF, HUMAN, MAT_GEO, BIOL_CHEM, LANG
		
	}
	
	

}
