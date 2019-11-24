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

@RestController
public class NoteController {
	
	
	
	@Autowired
	private NoteService service;
	
	
	
	

}
