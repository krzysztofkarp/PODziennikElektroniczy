package com.sollan.teachers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.sollan.teachers.Teacher;
import com.sollan.teachers.service.TeacherService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class TeacherController {
	
	
	@Autowired
	private TeacherService teacherService;
	
	
	@RequestMapping(value = BackendMappings.Teacher.ALL, method = RequestMethod.GET)
	public ItemsResponse<Teacher> getAll() {
		return ResponseUtil.runInMultiTemplate(() -> teacherService.getAll());
	}
	
	@RequestMapping(value = BackendMappings.Teacher.BY_ID, method = RequestMethod.GET)
	public ItemResponse<Teacher> byId(@RequestParam("id") Long id) {
		return ResponseUtil.runInItemTemplate(() -> teacherService.getById(id));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.SAVE_OR_UPDATE, method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public Response  update(@RequestBody Teacher t) throws Exception {
		return ResponseUtil.runInVoidTemplate(() -> teacherService.save(t));
	}


}
