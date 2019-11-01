package com.sollan.classes.repo;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.sollan.classes.model.StudentClass;


@Repository(value = "studentClassRepository")
public interface StudentClassRepository extends CrudRepository<StudentClass, Long> {
	



}
