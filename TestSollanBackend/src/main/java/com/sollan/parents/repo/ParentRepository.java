package com.sollan.parents.repo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.sollan.parents.model.Parent;

@Repository(value = "parentRepository")
public interface ParentRepository extends CrudRepository<Parent, Long>{
	
	@Query("from Parent where login=:username")
	public Parent findByUsername(@Param("username") String username);
	
	@Query("from Parent p join p.children c where c.id = :studentId")
	public Parent findByStudentId(@Param("studentId") Long studentId);

}
