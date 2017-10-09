package com.sollan.testsollan.question.service;

import java.util.Collection;

import com.sollan.testsollan.answer.model.Answer;

public interface QuestionService {

	Collection<Answer> getAnswers(int id);

}
