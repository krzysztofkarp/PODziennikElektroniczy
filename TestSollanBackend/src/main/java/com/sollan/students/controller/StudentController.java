package com.sollan.students.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.sollan.students.model.Student;
import com.sollan.students.service.StudentService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class StudentController {
	
	
	
	@Autowired
	private StudentService service;
	
	@RequestMapping(value = BackendMappings.Student.ALL, method = RequestMethod.GET)
	public ItemsResponse<Student> getAll() {
		return ResponseUtil.runInMultiTemplate(() -> service.getAll());
	}
	

	
	@RequestMapping(value = BackendMappings.Student.BY_ID, method = RequestMethod.GET)
	public ItemResponse<Student> byId(@RequestParam("id") Long id) {
		return ResponseUtil.runInItemTemplate(() -> service.getById(id));
	}
	
	@RequestMapping(value = BackendMappings.Student.BY_CLASS_ID, method = RequestMethod.GET)
	public ItemsResponse<Student> byClassId(@RequestParam("id") String id) {
		return ResponseUtil.runInMultiTemplate(() -> service.byClassId(Long.parseLong(id)));
	}
	
	
	
	@RequestMapping(value = BackendMappings.Student.SAVE_OR_UPDATE, method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public ItemResponse<Student> update(@RequestBody Student student) throws Exception {
		return  ResponseUtil.runInItemTemplate(() -> service.save(student));
	}
	
	@RequestMapping(value = BackendMappings.Student.REMOVE, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public Response  remove(@RequestParam("id") Long id) throws Exception {
		return  ResponseUtil.runInVoidTemplate(() -> service.delete(id));
	}
	
	

}
