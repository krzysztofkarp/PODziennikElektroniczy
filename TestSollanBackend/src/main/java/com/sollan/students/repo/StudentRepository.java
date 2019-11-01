package com.sollan.students.repo;



import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sollan.students.model.Student;

@Repository(value = "studentRepository")
public interface StudentRepository  extends CrudRepository<Student, Long>{
	
	@Query("from Student where login=:username")
	public Student findByUsername(@Param("username") String username);
	
}
