package com.sollan.testsollan.validation.service;

import java.io.IOException;
import java.util.List;

import com.sollan.testsollan.answer.model.UserAnswer;
import com.sollan.testsollan.validation.model.ValidationResult;

public interface ValidationService {

	void validate(List<UserAnswer> answers, String name);

	void createResultFile() throws IOException;
	
	boolean validatePassword(String password);
}
