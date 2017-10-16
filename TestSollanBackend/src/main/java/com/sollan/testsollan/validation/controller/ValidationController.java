package com.sollan.testsollan.validation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.testsollan.answer.model.UserAnswer;
import com.sollan.testsollan.main.Response;
import com.sollan.testsollan.validation.model.ValidationResult;
import com.sollan.testsollan.validation.service.ValidationServiceImpl;

@RestController
public class ValidationController {
	
	@Autowired
	ValidationServiceImpl validator;

	@RequestMapping(value ="/api/validateAnswers", method = RequestMethod.POST)
	public Response<String> validate(@RequestBody List<UserAnswer> answers, @RequestParam("name") String name) {
		validator.validate(answers, name);
		Response<String> response = new Response<>("Answers validated.");
		return response;
	}
	
	@RequestMapping(value="/api/getResult", method = RequestMethod.GET)
	public Response<ValidationResult> getResult() {
		Response<ValidationResult> response = new Response<>(validator.getResult());
		return response;
	}
}
