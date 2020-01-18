package com.sollan.classes.model.teacherClass;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository(value = "teacherClassRepository")
public interface TeacherClassRepository extends CrudRepository<TeacherClass, Long> {
	
	@Transactional
	@Modifying
	@Query("delete from TeacherClass t where t.teacher.id=:teacherId")
	public void removeByTeacherId(@Param("teacherId") Long teacherId);
	
	@Transactional
	@Modifying
	@Query("delete from TeacherClass t where t.subjectName=:subjectName and t.teacherClass.classId=:classId")
	public void removeBySubjectAndId(@Param("subjectName") String subjectName, @Param("classId") Long classId);
	
	
	

}