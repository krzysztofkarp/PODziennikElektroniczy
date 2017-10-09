package com.sollan.testsollan.answer.service;

import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.springframework.stereotype.Service;

import com.sollan.testsollan.answer.model.Answer;
import com.sollan.testsollan.answer.model.Answers;

@Service
public class AnswerServiceImpl implements AnswerService {

	private Collection<Answer> answers;
	
	@PostConstruct
	private void init() {
		this.answers= loadAnswers();
	}
	private Collection<Answer> loadAnswers() {

		try {
			JAXBContext jc = JAXBContext.newInstance(Answers.class,Answer.class);
			Unmarshaller u = jc.createUnmarshaller();
			Answers element = (Answers) u
					.unmarshal(Answers.class.getClassLoader().getResourceAsStream("answers-java-programming-test.xml"));
			return element.getAnswers();
		} catch (JAXBException e) {

			e.printStackTrace();
		}

		return null;
	}
	
	//public Answer getAnswerById(Integer questionId)
	
	public static void main(String[] args) {
		AnswerServiceImpl a = new AnswerServiceImpl();
		System.out.println(a.loadAnswers());
	}

}
