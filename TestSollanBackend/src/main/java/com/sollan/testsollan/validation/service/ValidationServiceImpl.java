package com.sollan.testsollan.validation.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.testsollan.answer.model.UserAnswer;
import com.sollan.testsollan.question.model.Question;
import com.sollan.testsollan.question.service.QuestionService;
import com.sollan.testsollan.validation.model.ValidationResult;
import com.sollan.testsollan.validation.model.ValidationResult.AnswerResult;

@Service
public class ValidationServiceImpl implements ValidationService{

	@Autowired
	private QuestionService service;

	@Override
	public ValidationResult validate(List<UserAnswer> answers) {
		
		Collection<AnswerResult> correctAnswers = new ArrayList<>();
		int points = 0;
		boolean correct = false;
		
		Collection<Question> questions = service.getQuestions();
		
		for(Question q : questions) {
			UserAnswer u = this.findAnswerByQuestionId(q.getQuestionId(), answers);
			correct = verify(u, q);
			if(correct) 
				 points++;
				
			
			
			correctAnswers.add(new AnswerResult(q.getQuestionId(), correct));
				
		}
		
		return new ValidationResult(points, correctAnswers);
		
			
			
	}
	
	private UserAnswer findAnswerByQuestionId(int questionId, List<UserAnswer> answers) {
		return answers
			.stream()
			.filter(a -> a.getId() == questionId)
			.findFirst()
			.orElseGet(() -> new UserAnswer(questionId, 0));
	}
	
	private boolean verify(UserAnswer a, Question q) {
		return a.getValue()==q.getAnswerId();
	}
	
		
	
	
	
	
}
