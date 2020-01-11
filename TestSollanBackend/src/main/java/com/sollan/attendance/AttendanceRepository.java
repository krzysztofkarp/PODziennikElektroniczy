package com.sollan.attendance;

import java.util.Date;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository(value = "attendanceRepository")
public interface AttendanceRepository extends CrudRepository<Attendance, Long>{
	
	
	@Query("from Attendance a where a.student.id=:studentId")
	public Set<Attendance> byStudentId(@Param("studentId") Long studentId);
	
	@Query("from Attendance a where a.date=:time and a.student.id=:studentId")
	public Set<Attendance> byStudentIdAndDate(@Param("studentId") Long studentId, @Param("time") Date time);
	
	@Query("from Attendance a where a.date=:time and a.student.id=:studentId and a.subject.subjectId=:subjectId")
	public Attendance byStudentDateAndSubject(@Param("studentId") Long studentId, @Param("time") Date time, @Param("subjectId") Long subjectId);
	
	@Query("update Attendance a set a.present=:isPresent where a.id=:id")
	@Modifying
	@Transactional
	public void updateAttendance(@Param("id")Long id, @Param("isPresent") Boolean isPresent);

}
