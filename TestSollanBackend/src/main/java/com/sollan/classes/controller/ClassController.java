package com.sollan.classes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.classes.model.StudentClass;
import com.sollan.classes.service.StudentClassService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class ClassController {
	
	
	@Autowired
	private StudentClassService service;
	
	@RequestMapping(value = BackendMappings.StudentClass.ALL, method = RequestMethod.GET)
	public ItemsResponse<StudentClass> getAll() {
		return ResponseUtil.runInMultiTemplate(() -> service.getAll());
	}
	
	
	@RequestMapping(value = BackendMappings.StudentClass.SAVE_OR_UPDATE , method = RequestMethod.POST)
	public Response saveOrUpdate(@RequestBody StudentClass clazz) {
		return ResponseUtil.runInVoidTemplate(() -> service.save(clazz));
	}
	
	@RequestMapping(value = BackendMappings.StudentClass.ADD_STUDENT , method = RequestMethod.GET)
	public Response addStudent(@RequestParam("classId")Long classId, @RequestParam("studentId")Long studentId) {
		return ResponseUtil.runInVoidTemplate(() -> service.addStudent(classId, studentId));
	}
	


}
