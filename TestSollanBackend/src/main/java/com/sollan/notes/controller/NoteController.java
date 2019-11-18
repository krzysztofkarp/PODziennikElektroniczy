package com.sollan.notes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.GsonBuilder;
import com.sollan.notes.model.Note;
import com.sollan.notes.service.NoteService;
import com.sollan.util.BackendMappings;
import com.sollan.util.Response;

@RestController
public class NoteController {
	
	
	
	@Autowired
	private NoteService service;
	
	
	
		
	@RequestMapping(value = BackendMappings.Note.ADD, method = RequestMethod.POST)
	public Response<Note> addNote(@RequestParam("note") String note) {
		GsonBuilder gsonBuilder = new GsonBuilder();
		Response<Note> response = new Response<Note>();
		response.setItem(service.addNote(gsonBuilder.create().fromJson(note, Note.class)));
		return response;
	}
	
	

}
