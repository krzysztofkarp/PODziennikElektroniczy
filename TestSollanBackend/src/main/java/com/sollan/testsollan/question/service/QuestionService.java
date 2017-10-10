package com.sollan.testsollan.question.service;

import java.util.Collection;

import com.sollan.testsollan.answer.model.Answer;
import com.sollan.testsollan.question.model.Question;

public interface QuestionService {

	Collection<Answer> getAnswers(int id);

	Collection<Question> loadQuestions();

	Collection<Question> getQuestions();

}
