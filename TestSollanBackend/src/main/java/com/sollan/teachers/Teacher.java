package com.sollan.teachers;


import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.transaction.Transactional;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sollan.classes.model.teacherClass.TeacherClass;
import com.sollan.messages.model.Message;
import com.sollan.notes.model.Note;
import com.sollan.subjects.model.Subject;
import com.sollan.user.model.User;



@Entity
@Table(name = "teacher")
@Transactional
public class Teacher extends User{
	
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinTable(
			name = "teacher_subject", 
			joinColumns = @JoinColumn(name = "teacher_id"), 
			inverseJoinColumns = @JoinColumn(name = "subject_subjectId"))
	@JsonIgnore
	private Set<Subject> subjects = new HashSet<>();
	
	
	@OneToMany(
		        mappedBy = "teacher",
		        cascade = CascadeType.PERSIST,
		        orphanRemoval = false
		    )
	@JsonIgnore
	private Set<TeacherClass> classes = new HashSet<>();
	
	@OneToMany(
			mappedBy = "teacher",
	        cascade = CascadeType.PERSIST,
	        orphanRemoval = true)
	@JsonIgnore
	private Set<Note> notes = new HashSet<>();
	
	
	@OneToMany(
			mappedBy = "teacher",
	        cascade = CascadeType.PERSIST,
	        orphanRemoval = true)
	@JsonIgnore
	private Set<Message> messages = new HashSet<>();
	
	
	
	public Teacher() {}
	
	
	public Set<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(Set<Subject> subjects) {
		this.subjects = subjects;
	}

	public void addSubject(Subject s) {
		this.subjects.add(s);
		s.getTeachers().add(this);
	}
	
	public void removeSubject(Subject s) {
		this.subjects.remove(s);
		s.getTeachers().remove(this);
	}
	
	public void addClass(TeacherClass tc) {
		this.classes.add(tc);
		tc.setTeacher(this);
	}
	
	public void removeClass(TeacherClass tc) {
		this.classes.remove(tc);
}
		
	public void addNote(Note n) {
		this.notes.add(n);
		n.setTeacher(this);
	}
	
	public void removeNote(Note n) {
		this.notes.remove(n);
		n.setTeacher(null);
	}
	
	public void addSubjects(List<Subject> s) {
		this.subjects.addAll(s);
		s.forEach(su -> su.getTeachers().add(this));
	}
	
	public void removeSubjects(List<Subject> s) {
		this.subjects.removeAll(s);
		s.forEach(su -> su.getTeachers().remove(this));
	}
	
	public void addMessage(Message m) {
		this.messages.add(m);
		m.setTeacher(this);
	}
	
	public void removeMessage(Message m) {
		this.messages.remove(m);
		m.setTeacher(null);
	}


	public Set<TeacherClass> getClasses() {
		return classes;
	}


	public void setClasses(Set<TeacherClass> classes) {
		this.classes = classes;
	}
	
	
	
	
	
	
	
	
	

}
