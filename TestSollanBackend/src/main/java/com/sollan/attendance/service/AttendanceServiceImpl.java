package com.sollan.attendance.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.attendance.model.Attendance;
import com.sollan.attendance.repo.AttendanceRepository;
import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.subjects.model.Subject;
import com.sollan.subjects.repo.SubjectRepository;
import com.sollan.util.Utils;


@Service
public class AttendanceServiceImpl implements AttendanceService {
	
	public static Date YEAR_START;
	public static Date YEAR_END;
	
	
	@Autowired
	private AttendanceRepository repo;
	
	@Autowired
	private SubjectRepository subRepo;
	
	@Autowired
	private StudentRepository sRepo;
	
	
	
	@PostConstruct
	private void initDates() {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.YEAR, 2019);
		cal.set(Calendar.MONTH, Calendar.SEPTEMBER);
		cal.set(Calendar.DAY_OF_MONTH, 2);
		YEAR_START = cal.getTime();
		cal.set(Calendar.YEAR, 2020);
		cal.set(Calendar.MONTH, Calendar.JUNE);
		cal.set(Calendar.DAY_OF_MONTH, 26);
		YEAR_END = cal.getTime();
	}
	
	@Override
	public List<Attendance> byStudentId(Long studentId) {
		return Utils.asList(repo.byStudentId(studentId));
	}

	@Override
	public List<Attendance> byStudentIdAndDate(Long studentId, Date date) {
		return Utils.asList((repo.byStudentIdAndDate(studentId, date)));
	}

	@Override
	public void updateAttendance(Long studentId, Long subjectId, Date time, Boolean value) {
		repo.updateAttendance(studentId,subjectId, time,  value);
	}

	@Override
	public Attendance save(Attendance a, Long studentId, Long subjectId) {
		Student s = sRepo.findById(studentId).get();
		Subject sub = subRepo.findById(subjectId).get();
		a.setStudent(s);
		a.setSubject(sub);
		return repo.save(a);
	}

	@Override
	public Map<Long, Boolean> getAttendanceMap(Long classId) {
		return null;
	}

	@Override
	public Attendance byStudentDateAndSubject(Long studentId, Long subjectId, Date date) {
		return repo.byStudentDateAndSubject(studentId, date, subjectId);
	}

	@Override
	public List<Attendance> getFromBetweenDates(Long studentId, Date start, Date finish) {
	return Utils.asList(repo.betweenDates(studentId, start, finish));
	}

	@Override
	public List<Attendance> getFromThisYear(Long studentId) {
		return Utils.asList(repo.betweenDates(studentId, YEAR_START, YEAR_END));
	}

}
