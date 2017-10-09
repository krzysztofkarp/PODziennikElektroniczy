package com.sollan.testsollan.question.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sollan.main.Response;
import com.sollan.testsollan.answer.model.Answer;
import com.sollan.testsollan.question.service.QuestionService;

@RestController
public class QuestionController {

	@Autowired
	QuestionService questionService;

	@RequestMapping(value = "/api/answers", method = RequestMethod.GET)
	public Response<Answer> get(@RequestParam("questionId") int id) {
		Response<Answer> response = new Response<>();
		response.setItems(questionService.getAnswers(id));
		return response;
	}

}
