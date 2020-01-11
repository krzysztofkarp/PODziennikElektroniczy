package com.sollan.messages;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.messages.repo.MessageRepository;
import com.sollan.parents.model.Parent;
import com.sollan.parents.repo.ParentRepository;
import com.sollan.students.model.Student;
import com.sollan.students.repo.StudentRepository;
import com.sollan.teachers.Teacher;
import com.sollan.teachers.repo.TeacherRepository;
import com.sollan.user.model.User;
import com.sollan.user.model.User.UserType;
import com.sollan.util.Utils;

@Service
public class MessageServiceImpl implements MessageService {

	@Autowired
	private StudentRepository sRepo;

	@Autowired
	private TeacherRepository tRepo;

	@Autowired
	private ParentRepository pRepo;
	
	@Autowired
	private MessageRepository repo;

	@Override
	public Message sendMessage(Message m, Long senderId, Long recipientId) {
		return handle(m, senderId, recipientId);
	}

	private Message handle(Message m, Long senderId, Long recipientId) {
		handleForSender(m, senderId);
		return handleForRecipent(m, recipientId);
	}


	private Message handleForSender(Message m, Long senderId) {
		return addMessage(m, m.getSender(), senderId);
	}
	
	private Message handleForRecipent(Message m, Long recipentId) {
		return addMessage(m, m.getRecipient(), recipentId);
	}
	
	private Message addMessage(Message m, UserType type, Long userId) {
		switch(type) {
		case STUDENT: 
			Student s = sRepo.findById(userId).get();
			s.addMessage(m);
			return repo.save(m);
		case TEACHER: 
			Teacher t = tRepo.findById(userId).get();
			t.addMessage(m);
			return repo.save(m);
		case PARENT: 
			Parent p = pRepo.findById(userId).get();
			p.addMessage(m);
			return repo.save(m);
		default: return null;
		
		}
	}

	@Override
	public List<Message> byTeacherId(Long teacherId) {
		return Utils.asList(repo.byTeacherId(teacherId));
	}

	@Override
	public List<Message> byStudentId(Long studentId) {
		return Utils.asList(repo.byStudentId(studentId));
	}

	@Override
	public List<Message> byParentId(Long parentId) {
		return Utils.asList(repo.byParentId(parentId));
	}

	@Override
	public User byTypeAndId(Long messageId, UserType type) {
		switch(type) {
		case STUDENT: 
			return repo.getStudent(messageId);
		case TEACHER: 
			return repo.getTeacher(messageId);
		case PARENT: 
			return repo.getParent(messageId);
		default: return null;
		
		}
	}

	@Override
	public void setOpened(Long messageId) {
		repo.setOpened(messageId, true);
	}

	@Override
	public Message sendStatement(Message m) {
		return repo.save(m);
	}

	@Override
	public List<Message> getStatements() {
		return Utils.asList(repo.getStatements());
	}

}
