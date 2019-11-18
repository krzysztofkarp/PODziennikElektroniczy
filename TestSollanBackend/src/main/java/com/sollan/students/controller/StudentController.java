package com.sollan.students.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.students.model.Student;
import com.sollan.students.service.StudentService;
import com.sollan.util.BackendMappings;
import com.sollan.util.Response;

@RestController
public class StudentController {
	
	
	
	@Autowired
	private StudentService service;
	
	@RequestMapping(value = BackendMappings.Student.ALL, method = RequestMethod.GET)
	public Response<Student> getAll() {
		Response<Student> response = new Response<Student>();
		response.setItems(service.getAll());
		return response;
	}
	

	
	@RequestMapping(value = BackendMappings.Student.BY_ID, method = RequestMethod.GET)
	public Response<Student> byId(@RequestParam("id") Long id) {
		Response<Student> response = new Response<Student>();
		response.setItem(service.getById(id));
		return response;
	}
	
	
	@RequestMapping(value = BackendMappings.Student.SAVE_OR_UPDATE, method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public @ResponseBody void update(@RequestBody Student student) throws Exception {
		service.save(student);
	}
	
	

}
