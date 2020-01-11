package com.sollan.messages.repo;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sollan.messages.Message;
import com.sollan.parents.model.Parent;
import com.sollan.students.model.Student;
import com.sollan.teachers.Teacher;



@Repository(value = "messageRepository")
public interface MessageRepository  extends CrudRepository<Message, Long>{
	
	
	
	@Query("from Message m where m.teacher.id=:teacherId")
	public Set<Message> byTeacherId(@Param("teacherId") Long teacherId);
	
	@Query("from Message m where m.sender is null")
	public Set<Message> getStatements();
	
	@Query("from Message m where m.student.id=:teacherId")
	public Set<Message> byStudentId(@Param("teacherId") Long teacherId);
	
	@Query("from Message m where m.parent.id=:teacherId")
	public Set<Message> byParentId(@Param("teacherId") Long teacherId);
	
	@Query("select m.teacher from Message m where m.messageId=:messageId")
	public Teacher getTeacher(@Param("messageId") Long messageId);
	
	@Query("select m.student from Message m where m.messageId=:messageId")
	public Student getStudent(@Param("messageId") Long messageId);
	
	@Query("select m.parent from Message m where m.messageId=:messageId")
	public Parent getParent(@Param("messageId") Long messageId);
	
	@Query("update Message m set m.opened=:opened where m.messageId=:messageId")
	@Modifying
	@Transactional
	public void setOpened(@Param("messageId")Long messageId, @Param("opened") Boolean opened);


}
