package com.sollan.testsollan.validation.service;

import java.util.List;

import com.sollan.testsollan.answer.model.UserAnswer;
import com.sollan.testsollan.validation.model.ValidationResult;

public interface ValidationService {

	ValidationResult validate(List<UserAnswer> answers);
}
