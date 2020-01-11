package com.sollan.messages;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.sollan.auth.aspect.annotation.Token;
import com.sollan.auth.aspect.annotation.ValidateToken;
import com.sollan.user.model.User;
import com.sollan.user.model.User.UserType;
import com.sollan.util.BackendMappings;
import com.sollan.util.response.ItemResponse;
import com.sollan.util.response.ItemsResponse;
import com.sollan.util.response.Response;
import com.sollan.util.response.ResponseUtil;

@RestController
public class MessageController {
	
	
	@Autowired
	private MessageService service;
	
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Message.SEND_MESSAGE, method = RequestMethod.POST)
	public ItemResponse<Message> getAll(@RequestHeader("X-AUTH-TOKEN") @Token String token, @RequestBody Message message,
			@RequestParam("senderId") Long senderId, @RequestParam("recipientId") Long recipientId) {
		return ResponseUtil.runInItemTemplate(() -> service.sendMessage(message, senderId, recipientId));
	}
	

	@ValidateToken
	@RequestMapping(value = BackendMappings.Message.BY_TEACHER_ID, method = RequestMethod.GET)
	public ItemsResponse<Message> byTeacherId(@RequestHeader("X-AUTH-TOKEN") @Token String token, @RequestParam("teacherId") Long teacherId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byTeacherId(teacherId));
	}
	

	@ValidateToken
	@RequestMapping(value = BackendMappings.Message.BY_STUDENT_ID, method = RequestMethod.GET)
	public ItemsResponse<Message> byStudentId(@RequestHeader("X-AUTH-TOKEN") @Token String token, @RequestParam("studentId") Long studentId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byStudentId(studentId));
	}
	

	@ValidateToken
	@RequestMapping(value = BackendMappings.Message.BY_PARENT_ID, method = RequestMethod.GET)
	public ItemsResponse<Message> byParentId(@RequestHeader("X-AUTH-TOKEN") @Token String token, @RequestParam("parentId") Long parentId) {
		return ResponseUtil.runInMultiTemplate(() -> service.byParentId(parentId));
	}
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Message.BY_TYPE_AND_ID, method = RequestMethod.GET)
	public ItemResponse<User> byTypeAndId(@RequestHeader("X-AUTH-TOKEN") @Token String token, 
			@RequestParam("messageId") Long messageId, @RequestParam("type") UserType type) {
		return ResponseUtil.runInItemTemplate(() -> service.byTypeAndId(messageId, type));
	}
	
	@ValidateToken
	@RequestMapping(value = BackendMappings.Message.SET_OPENED, method = RequestMethod.GET)
	public Response setOpened(@RequestHeader("X-AUTH-TOKEN") @Token String token, 
			@RequestParam("messageId") Long messageId) {
		return ResponseUtil.runInVoidTemplate(() -> service.setOpened(messageId));
	}
	
	

	

}
