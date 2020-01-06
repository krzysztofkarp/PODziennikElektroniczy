package com.sollan.students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.auth.aspect.annotation.Token;
import com.sollan.auth.aspect.annotation.ValidateToken;
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
	
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Student.ALL, method = RequestMethod.GET)
	public ItemsResponse<Student> getAll(@RequestHeader("X-AUTH-TOKEN") @Token String token) {
		return ResponseUtil.runInMultiTemplate(() -> service.getAll());
	}
	

	@ValidateToken
	@RequestMapping(value = BackendMappings.Student.BY_ID, method = RequestMethod.GET)
	public ItemResponse<Student> byId(@RequestParam("id") Long id) {
		return ResponseUtil.runInItemTemplate(() -> service.getById(id));
	}
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Student.BY_CLASS_ID, method = RequestMethod.GET)
	public ItemsResponse<Student> byClassId(@RequestHeader("X-AUTH-TOKEN") @Token String token,
			@RequestParam("id") Long id) {
		return ResponseUtil.runInMultiTemplate(() -> service.byClassId(id));
	}
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Student.BY_PARENT_ID, method = RequestMethod.GET)
	public ItemsResponse<Student> byParentId(@RequestHeader("X-AUTH-TOKEN") @Token String token,
			@RequestParam("id") Long id) {
		return ResponseUtil.runInMultiTemplate(() -> service.byParentId(id));
	}
	
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Student.BY_CLASS_IDS, method = RequestMethod.GET)
	public ItemsResponse<Student> byClassIds(@RequestHeader("X-AUTH-TOKEN") @Token String token,
			@RequestParam("ids") List<Long> ids) {
		return ResponseUtil.runInMultiTemplate(() -> service.byClassIds(ids));
	}
	
	
	
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Student.SAVE_OR_UPDATE, method = RequestMethod.POST)
	public ItemResponse<Student> update(@RequestHeader("X-AUTH-TOKEN") @Token String token,
			@RequestBody Student student) throws Exception {
		return  ResponseUtil.runInItemTemplate(() -> service.save(student));
	}
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Student.REMOVE, method = RequestMethod.GET)
	public Response  remove(@RequestHeader("X-AUTH-TOKEN") @Token String token, 
			@RequestParam("id") Long id) throws Exception {
		return  ResponseUtil.runInVoidTemplate(() -> service.delete(id));
	}
	
	

}
