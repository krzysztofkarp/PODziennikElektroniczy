package com.sollan;

import java.util.Collection;

import org.junit.Assert;
import org.junit.Test;

import com.sollan.testsollan.answer.model.Answer;
import com.sollan.testsollan.answer.service.AnswerServiceImpl;

public class TestAnswers {
	
	@Test
	public void shouldLoadAnswers(){
		AnswerServiceImpl impl = new AnswerServiceImpl();
		//Collection<Answer> answers = impl.loadAnswers();
		
//		Assert.assertNotNull(answers);
//		Assert.assertTrue(answers.size()>0);
	}

}
