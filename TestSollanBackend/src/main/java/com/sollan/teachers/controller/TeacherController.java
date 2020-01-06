package com.sollan.teachers.controller;

import java.util.List;

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
	
	@RequestMapping(value = BackendMappings.Teacher.REMOVE, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public Response  remove(@RequestParam("id") Long id) throws Exception {
		return ResponseUtil.runInVoidTemplate(() -> teacherService.delete(id));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.SAVE_OR_UPDATE, method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public ItemResponse<Teacher>  update(@RequestBody Teacher t) throws Exception {
		return ResponseUtil.runInItemTemplate(() -> teacherService.save(t));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.ADD_SUBJECT, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public Response  addSubject(@RequestParam("subjectId") Long subjectId, @RequestParam("teacherId") Long teacherId) throws Exception {
		return ResponseUtil.runInVoidTemplate(() -> teacherService.addSubject(subjectId, teacherId));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.REMOVE_SUBJECT, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public Response  removeSubject(@RequestParam("subjectId") Long subjectId, @RequestParam("teacherId") Long teacherId) throws Exception {
		return ResponseUtil.runInVoidTemplate(() -> teacherService.removeSubject(subjectId, teacherId));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.ADD_SUBJECTS, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public Response  addSubjects(@RequestParam("subjectIds") List<Long> ids, @RequestParam("teacherId") Long teacherId) throws Exception {
		return ResponseUtil.runInVoidTemplate(() -> teacherService.addMultipleSubjects(ids, teacherId));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.REMOVE_SUBJECTS, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public Response  removeSubjects(@RequestParam("subjectIds") List<Long> ids, @RequestParam("teacherId") Long teacherId) throws Exception {
		return ResponseUtil.runInVoidTemplate(() -> teacherService.removeMultipleSubjects(ids, teacherId));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.ADD_CLASS, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public Response  addClass(@RequestParam("teacherId") Long teacherId, @RequestParam("classId") Long classId,  @RequestParam("subjectName") String subjectName) throws Exception {
		return ResponseUtil.runInVoidTemplate(() -> teacherService.addClass(classId, teacherId, subjectName));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.REMOVE_CLASS, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public Response  removeClass(@RequestParam("teacherId") Long teacherId, @RequestParam("classId") Long classId, @RequestParam("subjectName") String subjectName) throws Exception {
		return ResponseUtil.runInVoidTemplate(() -> teacherService.removeClass(classId, teacherId, subjectName));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.BY_SUBJECT, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public ItemsResponse<Teacher>  removeClass(@RequestParam("subjectId") Long subjectId) throws Exception {
		return ResponseUtil.runInMultiTemplate(() -> teacherService.bySubjectId(subjectId));
	}
	
	@RequestMapping(value = BackendMappings.Teacher.BY_CLASS_AND_SUBJECT, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public ItemResponse<Teacher>  byClassAndSubject(@RequestParam("subjectId") Long subjectId, @RequestParam("classId") Long classId) throws Exception {
		return ResponseUtil.runInItemTemplate(() -> teacherService.byClassAndSubject(classId, subjectId));
	}



}
