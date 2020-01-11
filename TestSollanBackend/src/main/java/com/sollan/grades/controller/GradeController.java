package com.sollan.grades.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.sollan.grades.model.Grade;
import com.sollan.grades.service.GradeDownloadService;
import com.sollan.grades.service.GradeService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class GradeController {

	
	@Autowired
	private GradeService service;
	
	@Autowired
	private GradeDownloadService dService;
	
	
	@RequestMapping(value = BackendMappings.Grade.BY_STUDENT_ID, method = RequestMethod.GET)
	public ItemsResponse<Grade> byStudentId(@RequestParam("studentId")Long studentId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byStudentId(studentId));
	}
	

	
	@RequestMapping(value = BackendMappings.Grade.BY_STUDENT_AND_SUBJECT, method = RequestMethod.GET)
	public ItemsResponse<Grade> byStudentSubjectId(@RequestParam("studentId") Long studentId, @RequestParam("subjectId") Long subjectId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byStudentAndSubjectId(studentId, subjectId));
	}
		
	
	@RequestMapping(value = BackendMappings.Grade.ADD, method = RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public Response update(@RequestBody Grade grade, @RequestParam("studentId")Long studentId, @RequestParam("subjectId")Long subjectId) throws Exception {
		return  ResponseUtil.runInVoidTemplate(() -> service.addGrade(grade, studentId, subjectId));
	}
	
	@RequestMapping(value = BackendMappings.Grade.REMOVE, method = RequestMethod.GET)
	@ResponseStatus(value = HttpStatus.OK)
	public Response remove(@RequestParam("studentId") Long id, @RequestParam("gradeId") Long gradeId, @RequestParam("subjectId")Long subjectId) throws Exception {
		return  ResponseUtil.runInVoidTemplate(() -> service.removeGrade(gradeId, id, subjectId));
	}
	
	@RequestMapping(value = BackendMappings.Grade.DOWNLOAD_GRADES, method = RequestMethod.GET)
	public void download(@RequestParam("studentId") Long studentId, @RequestParam("classId") Long classId, HttpServletResponse resp) throws Exception {
		dService.download(studentId, classId, resp);
	}
	
	
	
	
}
