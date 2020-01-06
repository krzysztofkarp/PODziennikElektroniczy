package com.sollan.notes.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.sollan.notes.model.Note;
import com.sollan.students.model.Student;
import com.sollan.teachers.Teacher;

@Repository(value = "noteRepository")
public interface NoteRepository extends CrudRepository<Note, Long> {
	
	@Query("from Note where student.id=:id")
	public Set<Note> byStudentId(@Param("id") Long id);
	
	@Query("from Note where teacher.id=:teacherId")
	public Set<Note> byTeacherId(@Param("teacherId") Long teacherId);
	
	@Query("select n.teacher from Note n where n.noteId=:noteId")
	public Teacher teacherByNoteId(@Param("noteId") Long noteId);
	
	@Query("select n.student from Note n where n.noteId=:noteId")
	public Student studentByNoteId(@Param("noteId") Long noteId);

}
