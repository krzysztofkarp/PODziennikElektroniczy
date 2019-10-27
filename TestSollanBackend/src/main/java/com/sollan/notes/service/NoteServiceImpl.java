package com.sollan.notes.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.notes.model.Note;
import com.sollan.teachers.Teacher;
import com.sollan.teachers.service.TeacherService;

@Service
public class NoteServiceImpl implements NoteService{
	
	
	@Autowired
	private NoteDAO dao;
	
	@Autowired
	private TeacherService tService;
	
	@Override
	public Note addNote(Note n) {
		Note note = new Note(n.getFrom(), n.getTo(), n.getDescription());
		assignLabels(note);
		dao.addNote(note);
		return note;
		
	}

	@Override
	public List<Note> byStudentId(String id) {
		return dao.getNotesForStudent(id);
	}

	@Override
	public List<Note> byTeacherId(String id) {
		return dao.getNotesFromTeacher(id);
	}
	
	private void assignLabels(Note n) {
		//Student s = sService.getById(n.getTo());
		//Teacher t = tService.getById(n.getFrom());
		//n.setFromLabel(t.getFullName());
		//n.setToLabel(s.getFullName());
		
	}

}
