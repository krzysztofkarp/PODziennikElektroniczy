package com.sollan.attendance.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.attendance.model.Attendance;
import com.sollan.attendance.service.AttendanceService;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class AttendanceController {
	
	
	
	@Autowired
	private AttendanceService service;
	
	@RequestMapping(value = BackendMappings.Attendance.BY_STUDENT_ID, method = RequestMethod.GET)
	public ItemsResponse<Attendance> byStudentId(@RequestParam("studentId") Long studentId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byStudentId(studentId));
	}
	
	@RequestMapping(value = BackendMappings.Attendance.BY_STUDENT_ID_AND_DATE, method = RequestMethod.POST)
	public ItemsResponse<Attendance> byStudentIdAndDate(@RequestBody Date date, @RequestParam("studentId") Long studentId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byStudentIdAndDate(studentId, date));
	}
	
	@RequestMapping(value = BackendMappings.Attendance.BY_STUDENT_SUBJECT_AND_DATE, method = RequestMethod.POST)
	public ItemResponse<Attendance> byStudentDateAndSubject(@RequestBody Date date, @RequestParam("studentId") Long studentId, @RequestParam("subjectId") Long subjectId) {
		return ResponseUtil.runInItemTemplate(() -> service.byStudentDateAndSubject(studentId, subjectId, date));
	}
	
	@RequestMapping(value = BackendMappings.Attendance.SAVE, method = RequestMethod.POST)
	public ItemResponse<Attendance> byStudentId(@RequestBody Attendance a, @RequestParam("studentId") Long studentId,@RequestParam("subjectId") Long subjectId) {
		return ResponseUtil.runInItemTemplate(() -> service.save(a, studentId, subjectId));
	}
	
	@RequestMapping(value = BackendMappings.Attendance.UPDATE_ATTENDANCE, method = RequestMethod.POST)
	public Response byStudentId( @RequestParam("value") Boolean value, @RequestParam("studentId") Long studentId,
			@RequestParam("subjectId") Long subjectId, @RequestBody Date time) {
		return ResponseUtil.runInVoidTemplate(() -> service.updateAttendance(studentId, subjectId, time, value));
	}
	
	@RequestMapping(value = BackendMappings.Attendance.FROM_THIS_YEAR, method = RequestMethod.GET)
	public ItemsResponse<Attendance> fromYear(@RequestParam("studentId") Long studentId) {
		return ResponseUtil.runInMultiTemplate(() -> service.getFromThisYear(studentId));
	}
	

}
