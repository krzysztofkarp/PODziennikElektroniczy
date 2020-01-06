package com.sollan.util.notification;

import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.user.model.User;
import com.sollan.util.Crypter;
import com.sollan.util.email.EmailService;
import com.sollan.util.email.TemplateParam;


@Service
public class NotificationServiceImpl implements NotificationService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(NotificationServiceImpl.class);

	
	
	@Autowired
	private EmailService emailService;

	@Override
	public void notifyAfterCreation(User u) {
		try {
			emailService.send(u.getEmail(),TemplateParam.Names.GREETING_EMAIL, getPropertiesForUser(u, true));
		} catch (MessagingException e) {
			LOGGER.error(e.getMessage());
		}

	}
	
	@Override
	public void notifyAfterReset(User u) {
		try {
			emailService.send("krzysztofskarp@gmail.com",TemplateParam.Names.RESET, getPropertiesForUser(u, false));
		} catch (MessagingException e) {
			LOGGER.error(e.getMessage());
		}
	}
	
	private Map<String, Object> getPropertiesForUser(User u, boolean decrypt){
		if(decrypt)
			u.setPassword(Crypter.getInstance().decrypt(u.getPassword()));
		
		Map<String, Object> props = new HashMap<>();
		props.put(TemplateParam.FIRST_NAME, u.getFirstName());
		props.put(TemplateParam.SECOND_NAME, u.getSecondName());
		props.put(TemplateParam.LOGIN, u.getLogin());
		props.put(TemplateParam.PASSWORD, u.getPassword());
		props.put(TemplateParam.ADMIN, "Administrator");
		return props;
	}

}
