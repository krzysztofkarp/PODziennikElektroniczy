package com.sollan.auth.token;

public interface TokenService {

	String generateToken();

	void removeToken(String token);

	boolean isValid(String token);

}

