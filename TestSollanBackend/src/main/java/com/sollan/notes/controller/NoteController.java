package com.sollan.notes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.notes.model.Note;
import com.sollan.notes.service.NoteService;
import com.sollan.students.model.Student;
import com.sollan.teachers.Teacher;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class NoteController {
	
	
	
	@Autowired
	private NoteService service;
	
	
	@RequestMapping(value = BackendMappings.Note.BY_STUDENT_ID, method = RequestMethod.GET)
	public ItemsResponse<Note> byStudentId(@RequestParam("id")Long studentId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byStudentId(studentId));
	}
	

	
	@RequestMapping(value = BackendMappings.Note.BY_TEACHER_ID, method = RequestMethod.GET)
	public ItemsResponse<Note> byStudentSubjectId(@RequestParam("teacherId") Long teacherId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byTeacherId(teacherId));
	}
		
	
	@RequestMapping(value = BackendMappings.Note.ADD, method = RequestMethod.POST)
	public Response saveOrUpdate(@RequestBody Note n, @RequestParam("teacherId") Long teacherId,
			@RequestParam("studentId")Long studentId) throws Exception {
		return  ResponseUtil.runInVoidTemplate(() -> service.save(n, studentId, teacherId));
	}
	
	@RequestMapping(value = BackendMappings.Note.REMOVE, method = RequestMethod.POST)
	public Response remove(@RequestBody Note n, @RequestParam("teacherId") Long teacherId,
			@RequestParam("studentId")Long studentId) throws Exception {
		return  ResponseUtil.runInVoidTemplate(() -> service.remove(n, studentId, teacherId));
	}
	
	
	@RequestMapping(value = BackendMappings.Note.TEACHER_BY_NOTE_ID, method = RequestMethod.GET)
	public ItemResponse<Teacher> teacherByNoteId(@RequestParam("noteId") Long noteId) {
		return ResponseUtil.runInItemTemplate(() -> service.teacherByNoteId(noteId));
	}
	
	@RequestMapping(value = BackendMappings.Note.STUDENT_BY_NOTE_ID, method = RequestMethod.GET)
	public ItemResponse<Student> studentByNoteId(@RequestParam("noteId") Long noteId) {
		return ResponseUtil.runInItemTemplate(() -> service.studentByNoteId(noteId));
	}

}
