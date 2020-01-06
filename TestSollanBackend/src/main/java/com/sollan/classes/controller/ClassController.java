package com.sollan.classes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.classes.model.StudentClass;
import com.sollan.classes.service.StudentClassService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
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
	
	@RequestMapping(value = BackendMappings.StudentClass.REMOVE, method = RequestMethod.POST)
	public Response remove(@RequestBody StudentClass clazz) {
		return ResponseUtil.runInVoidTemplate(() -> service.remove(clazz));
	}
	
	
	@RequestMapping(value = BackendMappings.StudentClass.SAVE_OR_UPDATE , method = RequestMethod.POST)
	public ItemResponse<StudentClass> saveOrUpdate(@RequestBody StudentClass clazz) {
		return ResponseUtil.runInItemTemplate(() -> service.save(clazz));
	}
	
	
	@RequestMapping(value = BackendMappings.StudentClass.BY_STUDENT_ID , method = RequestMethod.GET)
	public ItemResponse<StudentClass> getClass(@RequestParam("studentId")Long id) {
		return ResponseUtil.runInItemTemplate(() -> service.getClass(id));
	}
	

	@RequestMapping(value = BackendMappings.StudentClass.BY_TEACHER_ID , method = RequestMethod.GET)
	public ItemsResponse<StudentClass> byTeacherId(@RequestParam("teacherId")Long id) {
		return ResponseUtil.runInMultiTemplate(() -> service.byTeacherId(id));
	}
	
	@RequestMapping(value = BackendMappings.StudentClass.BY_TEACHER_AND_SUBJECT , method = RequestMethod.GET)
	public ItemsResponse<StudentClass> byTeacherAndSubject(@RequestParam("teacherId")Long teacherId,
			@RequestParam("subjectId")Long subjectId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byTeacherAndSubject(teacherId, subjectId));
	}
	
	@RequestMapping(value = BackendMappings.StudentClass.ADD_STUDENT , method = RequestMethod.GET)
	public Response addStudent(@RequestParam("classId")Long classId, @RequestParam("studentId")Long studentId) {
		return ResponseUtil.runInVoidTemplate(() -> service.addStudent(classId, studentId));
	}
	
	@RequestMapping(value = BackendMappings.StudentClass.ADD_STUDENTS , method = RequestMethod.GET)
	public Response addStudents(@RequestParam("classId")Long classId, @RequestParam("ids")List<Long> ids) {
		return ResponseUtil.runInVoidTemplate(() -> service.addStudents(classId, ids));
	}
	
	@RequestMapping(value = BackendMappings.StudentClass.ADD_SUBJECTS , method = RequestMethod.GET)
	public Response addSubjects(@RequestParam("classId")Long classId, @RequestParam("ids")List<Long> ids) {
		return ResponseUtil.runInVoidTemplate(() -> service.addSubjects(classId, ids));
	}
	
	@RequestMapping(value = BackendMappings.StudentClass.REMOVE_STUDENT , method = RequestMethod.GET)
	public Response removeStudent(@RequestParam("classId")Long classId, @RequestParam("studentId")Long studentId) {
		return ResponseUtil.runInVoidTemplate(() -> service.addStudent(classId, studentId));
	}
	
	@RequestMapping(value = BackendMappings.StudentClass.ADD_SUBJECT , method = RequestMethod.GET)
	public Response addSubject(@RequestParam("classId")Long classId, @RequestParam("studentId")Long studentId) {
		return ResponseUtil.runInVoidTemplate(() -> service.addSubject(classId, studentId));
	}
	
	@RequestMapping(value = BackendMappings.StudentClass.REMOVE_SUBJECT , method = RequestMethod.GET)
	public Response removeSubject(@RequestParam("classId")Long classId, @RequestParam("subjectId")Long subjectId) {
		return ResponseUtil.runInVoidTemplate(() -> service.removeSubject(classId, subjectId));
	}
	


}
