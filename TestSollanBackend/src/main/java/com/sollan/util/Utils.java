package com.sollan.util;

import java.lang.reflect.Array;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class Utils {
	
	
	
	public static List<Object> iterableAsList(Iterable<Object> i){
		return StreamSupport.stream(i.spliterator(), false)
			    .collect(Collectors.toList());
	}
	
	public static void doAndConvertToRuntime(ThrowingAction action) {
		doAndConvertToRuntime(() -> {
			action.execute();
			return null;
		});
	}

	public static <T> T doAndConvertToRuntime(Callable<T> action) {
		try {
			return action.call();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public static boolean nullOrEmpty(Object object) {
		if (object == null)
			return true;
		if (object instanceof Collection)
			return ((Collection<?>) object).isEmpty();
		if (object instanceof String)
			return ((String) object).length() == 0;
		if (object instanceof Map)
			return ((Map<?, ?>) object).isEmpty();
		if(object.getClass().isArray()) {
			return Array.getLength(object) == 0;
		}
		return false;
	}
	
	public static void throwIfCondition(boolean condition, Supplier<RuntimeException> thrower) {
		if (condition)
			throw thrower.get();
	}
	
	public static boolean notNullAndNotEmpty(Object object) {
		return !nullOrEmpty(object);
	}





}
