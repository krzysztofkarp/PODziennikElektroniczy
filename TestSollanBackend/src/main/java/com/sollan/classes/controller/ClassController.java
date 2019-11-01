package com.sollan.classes.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.sollan.classes.model.StudentClass;
import com.sollan.classes.service.StudentClassService;
import com.sollan.util.Response;

@RestController
public class ClassController {
	
	
	@Autowired
	private StudentClassService service;
	
	@RequestMapping(value = "/api/classes/all", method = RequestMethod.GET)
	public Response<StudentClass> getAll() {
		Response<StudentClass> response = new Response<StudentClass>();
		response.setItems(service.getAll());
		return response;
	}
	

	@RequestMapping(value = "/api/classes/byIds", method = RequestMethod.GET)
	public Response<StudentClass> byIds(@RequestParam("ids") List<Long> ids) {
		Response<StudentClass> response = new Response<StudentClass>();
		response.setItems(service.getClassesByIds(ids));
		return response;
	}

}
