package com.sollan.subjects.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sollan.subjects.model.Subject;
import com.sollan.teachers.Teacher;

@Repository(value = "subjectRepository")
public interface SubjectRepository extends CrudRepository<Subject, Long>{
	
	@Query("from Subject s join s.teachers t where t.id=:teacherId")
	public Set<Subject> byTeacherId(@Param("teacherId") Long teacherId);
	
	@Query("from Subject s join s.classes c where c.classId=:classId")
	public Set<Subject> byClassId(@Param("classId") Long classId);
	


}


