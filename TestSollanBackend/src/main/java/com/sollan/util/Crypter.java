package com.sollan.util;

import java.security.Key;
import java.util.Base64;
import java.util.Optional;
import java.util.function.BiFunction;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;


public class Crypter {
	private static final String AES = "AES";
	private static final String SIMPLE_KEY = "!!*ViiZ*";
	private static final int EXPECTED_KEY_LENGTH = 16;
	private volatile static Crypter INSTANCE;

	private final Key key;

	private Crypter(Key key) {
		this.key = key;
	}

	public static final Crypter getInstance() {
		if (INSTANCE == null) {
			synchronized (Crypter.class) {
				if (INSTANCE == null) {
					INSTANCE = createNewCrypter("client1");
				}
			}
		}
		return INSTANCE;

	}

	public static final Crypter createNewCrypter(String clientKey) {
		Key key = new SecretKeySpec(buildKeyValue(clientKey).getBytes(), AES);
		return new Crypter(key);
	}

	private static final String buildKeyValue(String clientKey) {
		return SIMPLE_KEY + takeOnly(EXPECTED_KEY_LENGTH - SIMPLE_KEY.length(), clientKey, '0');
	}

	public String encrypt(String text) {
		BiFunction<String, Cipher, String> func = (t, cipher) -> {
			return Utils.doAndConvertToRuntime(() -> {
				byte[] encryptedBytes = cipher.doFinal(t.getBytes("UTF-8"));
				byte[] encodedBytes = Base64.getEncoder().encode(encryptedBytes);
				return new String(encodedBytes, "UTF-8");
			});
		};
		return doAction(Cipher.ENCRYPT_MODE, text, func);

	}
	
	private static final String takeOnly(int numberOfCharacters, String text, char alternativeChar) {
		if (Utils.nullOrEmpty(text)) {
			text = "";
			for (int i = 0; i < numberOfCharacters; i++)
				text += alternativeChar;
			return text;
		}

		int textLength = text.length();
		if (textLength > numberOfCharacters)
			return text.substring(0, numberOfCharacters);
		if (textLength < numberOfCharacters) {
			for (int i = textLength; i < numberOfCharacters; i++)
				text += alternativeChar;
		}
		return text;
	}


	public String decrypt(String text) {
		BiFunction<String, Cipher, String> func = (t, cipher) -> {
			return Utils.doAndConvertToRuntime(() -> {
				byte[] decodedCipherText = Base64.getDecoder().decode(text.getBytes("UTF-8"));
				return new String(cipher.doFinal(decodedCipherText), "UTF-8");
			});
		};
		return doAction(Cipher.DECRYPT_MODE, text, func);
	}

	private String doAction(int mode, String text, BiFunction<String, Cipher, String> action) {
		return Utils.doAndConvertToRuntime(() -> {
			String newText = Optional.ofNullable(text).orElse("");
			Cipher cipher = Cipher.getInstance(AES);
			cipher.init(mode, key);
			return action.apply(newText, cipher);
		});
	}

}
