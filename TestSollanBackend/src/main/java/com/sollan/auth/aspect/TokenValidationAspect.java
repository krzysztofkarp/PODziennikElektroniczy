package com.sollan.auth.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sollan.auth.aspect.annotation.Token;
import com.sollan.auth.token.TokenService;

@Aspect
@Component
public class TokenValidationAspect {

	private final TokenService tokenService;
	
	
	@Autowired
	public TokenValidationAspect(TokenService tokenService) {
		this.tokenService = tokenService;
	}
	@Around("@annotation(com.sollan.auth.aspect.annotation.ValidateToken)")
	public Object validateToken(ProceedingJoinPoint joinPoint) throws Throwable {
		 return ValidationHelper.runInValidationTemplate(joinPoint,Token.class,
				   tokenService::isValid);
	}

}
