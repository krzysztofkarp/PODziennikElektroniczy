package com.sollan.subjects.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.sollan.subjects.model.Subject;
import com.sollan.subjects.service.SubjectService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class SubjectController {
	
	
	@Autowired
	private SubjectService service;
	
	
	@RequestMapping(value = BackendMappings.Subject.ALL, method = RequestMethod.GET)
	public ItemsResponse<Subject> getAll() {
		return ResponseUtil.runInMultiTemplate(() -> service.getAll());
	}
	
	@RequestMapping(value = BackendMappings.Subject.BY_TEACHER_ID, method = RequestMethod.GET)
	public ItemsResponse<Subject> byTeacherId(@RequestParam("teacherId")Long teacherId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byTeacherId(teacherId));
	}
	

	
	@RequestMapping(value = BackendMappings.Subject.BY_CLASS_ID, method = RequestMethod.GET)
	public ItemsResponse<Subject> byStudentSubjectId(@RequestParam("classId") Long classId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byClassId(classId));
	}
		
	
	@RequestMapping(value = BackendMappings.Subject.ADD, method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public ItemResponse<Subject> save(@RequestBody Subject s) throws Exception {
		return  ResponseUtil.runInItemTemplate(() -> service.save(s));
	}
	
	@RequestMapping(value = BackendMappings.Subject.REMOVE, method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public Response remove(@RequestBody Subject s) throws Exception {
		return  ResponseUtil.runInVoidTemplate(() -> service.delete(s));
	}
	

}
