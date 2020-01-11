package com.sollan.attendance;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.subjects.model.Subject;
import com.sollan.subjects.repo.SubjectRepository;
import com.sollan.util.Utils;


@Service
public class AttendanceServiceImpl implements AttendanceService {
	
	
	@Autowired
	private AttendanceRepository repo;
	
	@Autowired
	private SubjectRepository subRepo;
	
	@Autowired
	private StudentRepository sRepo;
	
	@Override
	public List<Attendance> byStudentId(Long studentId) {
		return Utils.asList(repo.byStudentId(studentId));
	}

	@Override
	public List<Attendance> byStudentIdAndDate(Long studentId, Date date) {
		return Utils.asList((repo.byStudentIdAndDate(studentId, date)));
	}

	@Override
	public void updateAttendance(Long studentId, Boolean value) {
		repo.updateAttendance(studentId, value);
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

}
