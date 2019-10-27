package com.sollan.students.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.persistence.Entity;
import javax.persistence.Transient;

import com.sollan.classes.model.StudentClass.ClassProfile;
import com.sollan.subjects.Subjects;
import com.sollan.subjects.Subjects.Subject;
import com.sollan.user.model.User;



@Entity
public class Student extends User{

	private String classId;
	private ClassProfile profile;
	
	@Transient
	private Map<String, List<Grade>> grades;
	@Transient
	private List<StudentComment> comments;
	@Transient
	private List<String> parentIds;
	
	
	public Student() {
		
	}
	
	public Student(String firstName, String secondName, String login, String password, String email) {
		super(firstName, secondName, UserType.STUDENT, login, password, email);
	}
	
	
	
	public Student(Long id, String firstName, String secondName, String login, String password, String email) {
		super(id, firstName, secondName, UserType.STUDENT, login, password, email);
	}



	
	public Map<String, List<Grade>> getGrades() {
		return grades;
	}

	public void setGrades(Map<String, List<Grade>> grades) {
		this.grades = grades;
	}
	
	
	private void initGradesMap() {
		this.grades = new HashMap<>();
		List<Subject> subs = Subjects.getSubjectsForProfile(this.profile);
		subs.stream().forEach(s -> {
			grades.put(s.getType().toString(), new ArrayList<Grade>());
		});
	}
	
	
	
	public String getClassId() {
		return classId;
	}

	public void setClassId(String classId) {
		this.classId = classId;
	}

	public ClassProfile getProfile() {
		return profile;
	}

	public void setProfile(ClassProfile profile) {
		this.profile = profile;
	}
	
	public List<StudentComment> getComments() {
		return comments;
	}

	public void setComments(List<StudentComment> comments) {
		this.comments = comments;
	}
	
	








	public List<String> getParentIds() {
		return parentIds;
	}

	public void setParentIds(List<String> parentIds) {
		this.parentIds = parentIds;
	}










	public static class Grade {
		private int grade;
		private Date date;
		private GradeType type;
		
		private static int minGrade = 1;
		private static int maxGrade = 6;
		private static Random rand = new Random();
		
		
		public Grade() {
			
		}
		
		public Grade(int grade, GradeType type, Date date) {
			this.grade = grade;
			this.date = date;
			this.type = type;
		}
		
		
		
		public int getGrade() {
			return grade;
		}


		public void setGrade(int grade) {
			this.grade = grade;
		}


		public Date getDate() {
			return date;
		}


		public void setDate(Date date) {
			this.date = date;
		}


		public GradeType getType() {
			return type;
		}

		public void setType(GradeType type) {
			this.type = type;
		}
		
		public static Grade getRandom() {
			int gr = rand.nextInt((maxGrade - minGrade) + 1) + minGrade;
			GradeType t = GradeType.values()[rand.nextInt(4)];
			return new Grade(gr, t ,new Date());
		}



		public enum GradeType{
			SPRAWDZIAN, KRATKÓWKA, ODPOWIEDZ, ZADANIE
		}
	}
	
	public class StudentComment{
		
		private String description;
		private String from;
		
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getFrom() {
			return from;
		}
		public void setFrom(String from) {
			this.from = from;
		}
		
		
	}
	
	
	

}
