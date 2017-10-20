
package com.sollan.testsollan.validation.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sollan.testsollan.answer.model.UserAnswer;
import com.sollan.testsollan.question.model.Question;
import com.sollan.testsollan.question.service.QuestionService;
import com.sollan.testsollan.utils.Consts;
import com.sollan.testsollan.validation.model.ValidationResult;
import com.sollan.testsollan.validation.model.ValidationResult.AnswerResult;

@Service
public class ValidationServiceImpl implements ValidationService {

	@Autowired
	private QuestionService service;

	private ValidationResult result;

	@Override
	public void validate(List<UserAnswer> answers, String name) {

		Collection<AnswerResult> correctAnswers = new ArrayList<>();
		int points = 0;
		boolean correct = false;

		Collection<Question> questions = service.getQuestions();

		for (Question q : questions) {
			UserAnswer u = this.findAnswerByQuestionId(q.getQuestionId(), answers);
			correct = verify(u, q);
			if (correct)
				points++;

			correctAnswers.add(new AnswerResult(q.getQuestionId(), correct));

		}

		this.result = new ValidationResult(points, correctAnswers, name);

		try {
			createResultFile(this.result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public boolean validatePassword(String password) {
		return password.equals(Consts.PASSWORD);
	}

	@Override
	public void createResultFile(ValidationResult result) throws IOException {

		File file = new File(Consts.RESULT_FILE_PATH);
		BufferedWriter bw = new BufferedWriter(new FileWriter(file));
		bw.write("<html>" + Consts.CSS_STYLE);
		bw.write("<body><h1>Name: " + result.getName() + "</h1>");
		bw.write("<h2>Points: " + result.getPoints() + "</h2>");
		bw.write("<h3>Date finished: " + this.getDate() + "</h3>");
		bw.write("<table border=1>");
		for (AnswerResult a : result.getResults()) {
			bw.write("<tr><td class='" + a.isCorrect() + "'>" + a.getQuestionId() + " " + a.isCorrect() + "</td></tr>");
		}
		bw.write("</body></html>");
		bw.close();

	}

	private UserAnswer findAnswerByQuestionId(int questionId, List<UserAnswer> answers) {
		return answers.stream().filter(a -> a.getId() == questionId).findFirst()
				.orElseGet(() -> new UserAnswer(questionId, 0));
	}

	private boolean verify(UserAnswer a, Question q) {
		return a.getValue() == q.getAnswerId();
	}

	private Date getDate() {
		return Calendar.getInstance().getTime();
	}

	public ValidationResult getResult() {
		return result;
	}

	public void setResult(ValidationResult result) {
		this.result = result;
	}

}
