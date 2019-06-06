package com.sollan.notes.service;

import java.util.List;

import com.sollan.notes.model.Note;

public interface NoteService {

	
	
	
	Note addNote(Note n);
	List<Note> byStudentId(String id);
	List<Note> byTeacherId(String id);
}
