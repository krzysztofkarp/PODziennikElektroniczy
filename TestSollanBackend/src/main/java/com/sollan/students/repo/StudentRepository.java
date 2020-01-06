package com.sollan.students.repo;



import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sollan.classes.model.StudentClass;
import com.sollan.students.model.Student;

@Repository(value = "studentRepository")
public interface StudentRepository  extends CrudRepository<Student, Long>{
	
	@Query("from Student s where s.login=:username")
	public Student findByUsername(@Param("username") String username);
	
	@Query("from Student s join s.parents p where p.id = :parentId")
	public Set<Student> byParentId(@Param("parentId") Long parentId);
	
	@Query("from Student s where s.studentClass.classId=:classId")
	public Set<Student> byClassId(@Param("classId") Long classId);
	
	@Query("select count(s) from Student s where s.studentClass.classId=:classId")
	public Long countForClass(@Param("classId") Long classId);
	
	@Query("select s.studentClass from Student s where s.id=:studentId")
	public StudentClass getClass(@Param("studentId") Long studentId);
	
	@Query("update Student s set s.password=:newPassword where s.id=:studentId")
	@Modifying
	@Transactional
	public void updatePassword(@Param("studentId")Long studentId, @Param("newPassword") String newPassword);
	
	@Query("select s.id, s.notes from Student s where s.id=:studentId")
	public Student getSimple(@Param("studentId") Long studentId);
	
	
}
