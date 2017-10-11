package com.sollan.testsollan.validation.model;

import java.util.Collection;

public class ValidationResult {

	private int points;
	
	private Collection<AnswerResult> results;

	
	
	
	public ValidationResult(int points, Collection<AnswerResult> results) {
		super();
		this.points = points;
		this.results = results;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	public Collection<AnswerResult> getResults() {
		return results;
	}

	public void setResults(Collection<AnswerResult> results) {
		this.results = results;
	}

	

	
	public static class AnswerResult {

		private int questionId;
		private boolean correct;

		
		
		
		public AnswerResult(int questionId, boolean correct) {
			super();
			this.questionId = questionId;
			this.correct = correct;
		}

		public int getQuestionId() {
			return questionId;
		}

		public void setQuestionId(int questionId) {
			this.questionId = questionId;
		}

		public boolean isCorrect() {
			return correct;
		}

		public void setCorrect(boolean correct) {
			this.correct = correct;
		}

	}
	
	@Override
	public String toString() {
		return " points:" + this.points;
	}

}
