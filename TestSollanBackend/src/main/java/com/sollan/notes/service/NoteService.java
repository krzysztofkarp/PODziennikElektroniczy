package com.sollan.notes.service;

import java.util.List;

import com.sollan.notes.model.Note;
import com.sollan.students.model.Student;
import com.sollan.teachers.Teacher;

public interface NoteService {

	
	void save(Note n, Long studentId, Long teacherId);
	void remove(Note n, Long studentId, Long teacherId);
	List<Note> byStudentId(Long studentId);
	List<Note> byTeacherId(Long teacherId);
	Teacher teacherByNoteId(Long id);
	Student studentByNoteId(Long id);
	
}
