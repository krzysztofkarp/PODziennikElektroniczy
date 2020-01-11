package com.sollan.messages;

import java.util.List;

import com.sollan.user.model.User;
import com.sollan.user.model.User.UserType;

public interface MessageService {
	
	
	Message sendMessage(Message m, Long senderId, Long recipientId);
	List<Message> byTeacherId(Long teacherId);
	List<Message> byStudentId(Long studentId);
	List<Message> byParentId(Long parentId);
	User byTypeAndId(Long messageId, UserType type);
	void setOpened(Long messageId);

}
