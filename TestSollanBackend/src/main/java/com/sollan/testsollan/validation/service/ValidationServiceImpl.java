package com.sollan.testsollan.validation.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
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
			createResultFile();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void createResultFile() throws IOException {

		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss");
		File file = new File("C://TEST//TestScore" + dateFormat.format(date) + ".htm");
		BufferedWriter bw = new BufferedWriter(new FileWriter(file));
		bw.write("<html>");
		bw.write("<body>");
		bw.write("<h1>Result was: " + result.getPoints() + "</h1>");
		bw.write("</body>");
		bw.write("</html>");
		bw.close();
		System.out.println("File Created");

	}

	@Override
	public boolean validatePassword(String password) {
		return password.equals(Consts.PASSWORD);
	}

	private UserAnswer findAnswerByQuestionId(int questionId, List<UserAnswer> answers) {
		return answers.stream().filter(a -> a.getId() == questionId).findFirst()
				.orElseGet(() -> new UserAnswer(questionId, 0));
	}

	private boolean verify(UserAnswer a, Question q) {
		return a.getValue() == q.getAnswerId();
	}

	public ValidationResult getResult() {
		return result;
	}

	public void setResult(ValidationResult result) {
		this.result = result;
	}

}
