package com.sollan.classes.model.teacherClass;

import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.sollan.classes.model.StudentClass;
import com.sollan.teachers.Teacher;

@Entity(name = "TeacherClass")
@Table(name = "teacher_class")
public class TeacherClass {

	private Long id;


	private Teacher teacher;

	private StudentClass teacherClass;

	@Column(name = "subject_name")
	private String subjectName;

	public TeacherClass() {

	}	
		
	public TeacherClass(Teacher t, StudentClass c, String subjectName) {
		this.teacher = t;
		this.teacherClass = c;
		this.subjectName = subjectName;
	}
	
	@Id
	@GeneratedValue
	@Column(name = "id")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "teacher_id")
	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "student_class_class_id")
	public StudentClass getTeacherClass() {
		return teacherClass;
	}

	public void setTeacherClass(StudentClass teacherClass) {
		this.teacherClass = teacherClass;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
 
        if (o == null || getClass() != o.getClass())
            return false;
 
        TeacherClass that = (TeacherClass) o;
        return Objects.equals(teacher, that.teacher) &&
               Objects.equals(teacherClass, that.teacherClass);
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(teacher, teacherClass);
    }

}
