package com.sollan.testsollan.question.service;

import java.util.Collection;

import org.springframework.stereotype.Service;

import com.sollan.testsollan.answer.model.Answer;

public interface QuestionService {
	
	Collection<Answer> getAnswers(int id);

}
