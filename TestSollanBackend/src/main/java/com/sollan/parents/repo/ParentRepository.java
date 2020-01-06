package com.sollan.parents.repo;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.sollan.parents.model.Parent;

@Repository(value = "parentRepository")
public interface ParentRepository extends CrudRepository<Parent, Long>{
	
	@Query("from Parent p where p.login=:username")
	public Parent findByUsername(@Param("username") String username);
	
	@Query("from Parent p join p.children c where c.id = :studentId")
	public Parent findByStudentId(@Param("studentId") Long studentId);
	
	@Query("update Parent p set p.password=:newPassword where p.id=:parentId")
	@Modifying
	@Transactional
	public void updatePassword(@Param("parentId")Long parentId, @Param("newPassword") String newPassword);

}
