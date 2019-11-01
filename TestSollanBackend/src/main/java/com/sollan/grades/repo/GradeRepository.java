package com.sollan.grades.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sollan.grades.model.Grade;


@Repository(value = "gradeRepository")
public interface GradeRepository extends CrudRepository<Grade, Long>{
	
	
	@Query("from Grade where student.id=:id")
	public Set<Grade> byStudentId(@Param("id") Long id);

}
