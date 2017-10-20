package com.sollan.testsollan.validation.service;

import java.util.List;

import com.sollan.testsollan.answer.model.UserAnswer;
import com.sollan.testsollan.validation.model.ValidationResult;

public interface ValidationService {

	void validate(List<UserAnswer> answers, String name);
	
	boolean validatePassword(String password);
}
