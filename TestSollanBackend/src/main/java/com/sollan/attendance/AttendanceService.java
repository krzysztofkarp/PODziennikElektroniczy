package com.sollan.attendance;

import java.util.Date;
import java.util.List;
import java.util.Map;

public interface AttendanceService {
	
	
	List<Attendance> byStudentId(Long studentId);
	List<Attendance> byStudentIdAndDate(Long studentId, Date date);
	Attendance byStudentDateAndSubject(Long studentId,  Long subjectId, Date date);
	void updateAttendance(Long studentId, Boolean value);
	Attendance save(Attendance value, Long studentId, Long subjectId);
	Map<Long, Boolean> getAttendanceMap(Long classId);

}
