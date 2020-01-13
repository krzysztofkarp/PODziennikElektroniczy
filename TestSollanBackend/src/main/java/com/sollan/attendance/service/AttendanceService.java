package com.sollan.attendance.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.sollan.attendance.model.Attendance;

public interface AttendanceService {
	
	
	List<Attendance> byStudentId(Long studentId);
	List<Attendance> byStudentIdAndDate(Long studentId, Date date);
	Attendance byStudentDateAndSubject(Long studentId,  Long subjectId, Date date);
	void updateAttendance(Long studentId, Long subjectId, Date time, Boolean value);
	Attendance save(Attendance value, Long studentId, Long subjectId);
	Map<Long, Boolean> getAttendanceMap(Long classId);
	List<Attendance> getFromThisYear(Long studentId);
	List<Attendance> getFromBetweenDates(Long studentId, Date start, Date finish);

}
