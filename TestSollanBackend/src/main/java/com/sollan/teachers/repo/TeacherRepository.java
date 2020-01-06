package com.sollan.teachers.repo;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.sollan.teachers.Teacher;

@Repository(value = "teacherRepository")
public interface TeacherRepository extends CrudRepository<Teacher, Long>{
	
	@Query("from Teacher t where t.login=:username")
	public Teacher findByUsername(@Param("username") String username);
	
	@Query("from Teacher t join t.classes c where c.teacherClass.classId=:classId")
	public Set<Teacher> byClassId(@Param("classId") Long classId);
	
	@Query("from Teacher t join t.subjects s where s.subjectId=:subjectId")
	public Set<Teacher> bySubject(@Param("subjectId") Long subjectId);
	
	@Query("from Teacher t join t.subjects s join t.classes c where s.subjectId=:subjectId and c.teacherClass.classId=:classId and c.subjectName=:subjectName")
	public Teacher byClassAndSubject(@Param("subjectId") Long subjectId, @Param("classId") Long classId, @Param("subjectName") String subjectName);
	
	@Query("update Teacher t set t.password=:newPassword where t.id=:teacherId")
	@Modifying
	@Transactional
	public void updatePassword(@Param("teacherId")Long teacherId, @Param("newPassword") String newPassword);

}

