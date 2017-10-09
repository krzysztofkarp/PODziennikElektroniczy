package com.sollan.testsollan.question.service;

import java.util.Collection;

import javax.annotation.PostConstruct;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.springframework.stereotype.Service;

import com.sollan.testsollan.answer.model.Answer;
import com.sollan.testsollan.question.model.Question;
import com.sollan.testsollan.question.model.Questions;


@Service
public class QuestionServiceImpl implements QuestionService {
	
	
	private Collection<Question> questions;
	
	@PostConstruct
	private void init() {
		this.questions= loadQuestions();
	}
	

	private Collection<Question> loadQuestions() {

		try {
			JAXBContext jc = JAXBContext.newInstance(Questions.class, Question.class);
			Unmarshaller u = jc.createUnmarshaller();
			Questions element = (Questions) u
					.unmarshal(Questions.class.getClassLoader().getResourceAsStream("questions.xml"));
			return element.getQuestions();
		} catch (JAXBException e) {

			e.printStackTrace();
		}

		return null;
	}
	
	
	@Override
	public Collection<Answer> getAnswers(int questionId) {
		
		Collection<Question> questions = this.loadQuestions();
		Question wQ = null;
		
		for(Question q : questions) {
			if(q.getQuestionId() == questionId)
				wQ = q;
				}
		
		
		return wQ.getAnswers();
		
//		HashMap<Integer, String> abcd = new HashMap<Integer, String>();		
//		
//		for(Answer a : answers) {
//			abcd.put(a.getId(), a.getContent());
//		}
		
//		return abcd;
		
		
		
	}
	
	
	
	public static void main(String[] args) {
		QuestionServiceImpl a = new QuestionServiceImpl();
		
		Collection<Answer> col = a.getAnswers(11);
		
//		for(Map.Entry<Integer, String> entry : map.entrySet()) {
//			System.out.println(entry.getKey() + ":" + entry.getValue());
//		}
		
	}

	

}
