package com.sollan.auth.token;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import org.springframework.stereotype.Service;

@Service
public class TokenServiceImpl implements TokenService {

	private final Set<String> tokens;

	public TokenServiceImpl() {
		tokens = Collections.synchronizedSet(new HashSet<>());
	}
	@Override
	public String generateToken() {
		final String token = UUID.randomUUID().toString()+System.currentTimeMillis();
		tokens.add(token);
		return token;
	}
	@Override
	public void removeToken(String token) {
		tokens.remove(token);
	}
	@Override
	public boolean isValid(String token) {
		return tokens.contains(token);
	}
	
}

