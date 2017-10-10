package com.sollan.testsollan.answer.model;

public class UserAnswer {

	private int id;
	
	private int value;

	
	public UserAnswer() {
		
	}
	
	public UserAnswer(int id, int value) {
		super();
		this.id = id;
		this.value = value;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	
	
	
}
