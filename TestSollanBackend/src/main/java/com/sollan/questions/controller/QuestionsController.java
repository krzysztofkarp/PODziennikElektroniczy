package com.sollan.questions.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sollan.questions.service.QuestionsService;

public class QuestionsController {
	@Autowired
	QuestionsService questionsService;
	
	@RequestMapping(value ="/questions", method = RequestMethod.GET)
	public void start() {
		questionsService.startQuestions();
		
	}

}
