package com.sollan.notes.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.sollan.notes.model.Note;

@Service
public class NoteDAO {
	
	
	private Map<String, Note> notes;
	
	
	@PostConstruct
	private void init() {
		notes = new HashMap<>();
	}
	
	
	public void addNote(Note newNote) {
		notes.put(newNote.getId(), newNote);
	}
	
	public List<Note> getNotesForStudent(String studentId){
		return notes.values().stream().filter(n -> n.getTo().equals(studentId)).collect(Collectors.toList());
	}
	
	public List<Note> getNotesFromTeacher(String teacherId){
		return notes.values().stream().filter(n -> n.getFrom().equals(teacherId)).collect(Collectors.toList());
	}
	
	

}
