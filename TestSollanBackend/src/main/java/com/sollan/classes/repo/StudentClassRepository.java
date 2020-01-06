package com.sollan.classes.repo;


import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.sollan.classes.model.StudentClass;


@Repository(value = "studentClassRepository")
public interface StudentClassRepository extends CrudRepository<StudentClass, Long> {
	
	@Query("from StudentClass s join s.teachers t where t.teacher.id=:teacherId")
	public Set<StudentClass> byTeacherId(@Param("teacherId") Long teacherId);
	
	@Query("from StudentClass s join s.teachers t join s.subjects sub where t.teacher.id=:teacherId and sub.subjectId=:subjectId")
	public Set<StudentClass> bySubjectAndTeacher(@Param("teacherId") Long teacherId,@Param("subjectId") Long subjectId);
	
	
	
	

}
