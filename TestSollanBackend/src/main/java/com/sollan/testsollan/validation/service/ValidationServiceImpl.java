package com.sollan.testsollan.validation.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
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
	
	private ValidationResult result;

	@Override
	public void writeResultFile() throws IOException {
		Date date = new Date() ;
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss") ;
		File file = new File("C://TEST//" + dateFormat.format(date) + ".txt") ;
		BufferedWriter out = new BufferedWriter(new FileWriter(file));
		out.write("Score was: " + result.getPoints());
		out.close();
		try {
			Process p;
			p = Runtime.getRuntime().exec("attrib +h " + file.getPath());
			p.waitFor();
			
		} catch (IOException e) {
			System.err.println("Things went wrong: " + e.getMessage());
			e.printStackTrace();
		} catch (InterruptedException ie) {
			System.err.println("Things went wrong: " + ie.getMessage());
			ie.printStackTrace();
		}
	}
	
	@Override
	public void validate(List<UserAnswer> answers, String name) {
		
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
		
		this.result =  new ValidationResult(points, correctAnswers, name);
		
		try {
			this.writeResultFile();
		} catch (IOException e) {
			e.printStackTrace();
		}	
			
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

	public ValidationResult getResult() {
		return result;
	}

	public void setResult(ValidationResult result) {
		this.result = result;
	}
	
	
	
		
	
	
	
	
}
