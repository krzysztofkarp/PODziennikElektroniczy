package com.sollan.testsollan.question.model;

import java.util.Collection;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;

import com.sollan.testsollan.answer.model.Answer;

@XmlAccessorType(XmlAccessType.FIELD)
public class Question {
	
	@XmlAttribute(name="questionId")
	private int questionId;
	
	@XmlAttribute(name="answerId")
	private int answerId;
	
	@XmlElement(name="answer")
	private Collection<Answer> answers;

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public int getAnswerId() {
		return answerId;
	}

	public void setAnswerId(int answerId) {
		this.answerId = answerId;
	}

	public Collection<Answer> getAnswers() {
		return answers;
	}

	public void setAnswers(Collection<Answer> answers) {
		this.answers = answers;
	}
	
	

}
