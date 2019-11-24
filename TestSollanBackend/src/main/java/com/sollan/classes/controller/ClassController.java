package com.sollan.classes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.classes.model.StudentClass;
import com.sollan.classes.service.StudentClassService;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.ResponseUtil;

@RestController
public class ClassController {
	
	
	@Autowired
	private StudentClassService service;
	
	@RequestMapping(value = "/api/classes/all", method = RequestMethod.GET)
	public ItemsResponse<StudentClass> getAll() {
		return ResponseUtil.runInMultiTemplate(() -> service.getAll());
	}
	


}
