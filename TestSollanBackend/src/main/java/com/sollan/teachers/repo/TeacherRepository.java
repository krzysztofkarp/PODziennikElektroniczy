package com.sollan.teachers.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.sollan.teachers.Teacher;

@Repository(value = "teacherRepository")
public interface TeacherRepository extends CrudRepository<Teacher, Long>{
	
	@Query("from Teacher where login=:username")
	public Teacher findByUsername(@Param("username") String username);

}

