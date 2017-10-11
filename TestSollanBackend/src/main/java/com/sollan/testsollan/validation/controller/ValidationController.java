package com.sollan.testsollan.validation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.main.Response;
import com.sollan.testsollan.answer.model.UserAnswer;
import com.sollan.testsollan.validation.model.ValidationResult;
import com.sollan.testsollan.validation.service.ValidationService;

@RestController
public class ValidationController {
	
	@Autowired
	ValidationService validator;

	@RequestMapping(value ="/api/validateAnswers", method = RequestMethod.POST)
	public Response<ValidationResult> validate(@RequestBody List<UserAnswer> answers) {
		Response<ValidationResult> response = new Response<>(validator.validate(answers));
		//response.setItem(timerService.startTimerS());
		return response;
	}
}
