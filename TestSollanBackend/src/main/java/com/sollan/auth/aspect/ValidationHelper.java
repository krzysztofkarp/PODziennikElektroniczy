package com.sollan.auth.aspect;


import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.function.Function;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sollan.util.Utils;


public class ValidationHelper {

	
	private static final Logger LOGGER = LoggerFactory.getLogger(ValidationHelper.class);

	
	private ValidationHelper() {
		
	}
	
	public static <T> Object runInValidationTemplate(ProceedingJoinPoint joinPoint,
			Class<? extends Annotation> annotationType,
			Function<T,Boolean> validator) throws Throwable {
		final Method method = ((MethodSignature)joinPoint.getSignature()).getMethod();
		final Object[] args = joinPoint.getArgs();
		final T toValidate = findByAnnotation(method,args,annotationType);
	    if(validator.apply(toValidate)) {
	    	return joinPoint.proceed();
	    }
	    LOGGER.error("Invocation of {}",method.getName());
	    throw new RuntimeException("Data invalid");
	}
	
	
	private static  <T> T findByAnnotation( Method method ,Object[] args,Class<? extends Annotation> annotationType) {
		if(Utils.notNullAndNotEmpty(args)) {
			final Parameter[] parameters = method.getParameters();
			for(int i =0,n=parameters.length;i<n;i++) {
				final Parameter p = parameters[i];
				final Object requestedAnnotation = p.getAnnotation(annotationType);
				if(requestedAnnotation != null) {
					return (T)args[i];
				}
			}
		}
		throw new IllegalArgumentException("@"+annotationType.getName()+" must be present in the parameters of the method");
	}
	
}
