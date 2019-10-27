package com.sollan.teachers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.teachers.Teacher;
import com.sollan.teachers.service.TeacherService;
import com.sollan.util.BackendMappings;
import com.sollan.util.Response;

@RestController
public class TeacherController {
	
	
	@Autowired
	private TeacherService teacherService;
	
	
	@RequestMapping(value = BackendMappings.Teachers.ALL, method = RequestMethod.GET)
	public Response<Teacher> getAll() {
		Response<Teacher> response = new Response<Teacher>();
		response.setItems(teacherService.getAll());
		return response;
	}
	
	@RequestMapping(value = BackendMappings.Teachers.BY_ID, method = RequestMethod.GET)
	public Response<Teacher> byId(@RequestParam("id") Long id) {
		Response<Teacher> response = new Response<Teacher>();
		response.setItem(teacherService.getById(id));
		return response;
	}


}
