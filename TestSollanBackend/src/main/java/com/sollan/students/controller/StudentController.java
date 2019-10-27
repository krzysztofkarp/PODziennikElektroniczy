package com.sollan.students.controller;

import java.util.Collection;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.GsonBuilder;
import com.sollan.parents.model.Parent;
import com.sollan.students.model.Student;
import com.sollan.students.service.StudentService;
import com.sollan.util.BackendMappings;
import com.sollan.util.DateDeserializer;
import com.sollan.util.Response;

@RestController
public class StudentController {
	
	
	
	@Autowired
	private StudentService service;
	
	@RequestMapping(value = BackendMappings.Students.ALL, method = RequestMethod.GET)
	public Response<Student> getAll() {
		Response<Student> response = new Response<Student>();
		response.setItems(service.getAll());
		return response;
	}
	
	@RequestMapping(value = BackendMappings.Students.PARENTS, method = RequestMethod.GET)
	public Response<Parent> getAllParents() {
		Response<Parent> response = new Response<Parent>();
		//response.setItems(service.getParents());
		return response;
	}
	
	
	@RequestMapping(value = BackendMappings.Students.BY_ID, method = RequestMethod.GET)
	public Response<Student> byId(@RequestParam("id") String id) {
		Response<Student> response = new Response<Student>();
		//response.setItem(service.getById(id));
		return response;
	}
	
	@RequestMapping(value = BackendMappings.Students.BY_IDS, method = RequestMethod.GET)
	public Response<Student> byIds(@RequestParam("ids") Collection<String> ids) {
		Response<Student> response = new Response<Student>();
		//response.setItems(service.getByIds(ids));
		return response;
	}
	
	@RequestMapping(value = BackendMappings.Students.UPDATE, method = RequestMethod.GET)
	public Response<Student> update(@RequestParam("student") String student) throws Exception {
		
		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.registerTypeAdapter(Date.class, new DateDeserializer());
		
		Response<Student> response = new Response<Student>();
		//response.setItem(service.update(gsonBuilder.create().fromJson(student, Student.class)));
		
		return response;
	}
	
	

}
