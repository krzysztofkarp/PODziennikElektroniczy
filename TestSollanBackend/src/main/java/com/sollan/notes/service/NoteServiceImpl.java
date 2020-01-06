package com.sollan.notes.service;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.notes.model.Note;
import com.sollan.notes.repo.NoteRepository;
import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.students.service.StudentService;
import com.sollan.teachers.Teacher;
import com.sollan.teachers.repo.TeacherRepository;
import com.sollan.teachers.service.TeacherService;
import com.sollan.util.Utils;

@Service
public class NoteServiceImpl implements NoteService{
	
	@Autowired
	private NoteRepository repo;
	
	
	@Autowired
	private TeacherRepository tRepo;
	
	@Autowired
	private StudentRepository sRepo;

	@Override
	public void save(Note n, Long studentId, Long teacherId) {
		if(Utils.nullOrEmpty(n.getDate()))
			n.setDate(new Date());
		
		Student stu = sRepo.findById(studentId).get();
		Teacher t = tRepo.findById(teacherId).get();
		stu.addNote(n);
		t.addNote(n);
		sRepo.save(stu);
		tRepo.save(t);
	}

	@Override
	public void remove(Note n, Long studentId, Long teacherId) {
		Student stu = sRepo.findById(studentId).get();
		Teacher t = tRepo.findById(teacherId).get();
		stu.removeNote(n);
		t.removeNote(n);
		sRepo.save(stu);
		tRepo.save(t);
		repo.delete(n);
	}

	@Override
	public List<Note> byStudentId(Long studentId) {
		return Utils.asList(repo.byStudentId(studentId));
	}

	@Override
	public List<Note> byTeacherId(Long teacherId) {
		return Utils.asList(repo.byTeacherId(teacherId));
	}

	@Override
	public Teacher teacherByNoteId(Long id) {
		return repo.teacherByNoteId(id);
	}

	@Override
	public Student studentByNoteId(Long id) {
		return repo.studentByNoteId(id);
	}

	
	
		
	

}
