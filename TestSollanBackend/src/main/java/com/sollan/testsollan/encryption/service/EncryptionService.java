package com.sollan.testsollan.encryption.service;

import javax.crypto.SecretKey;

public interface EncryptionService {
	
	byte[] encryptText(String plainText, SecretKey secKey) throws Exception;
	String decryptText(byte[] byteCipherText, SecretKey secKey) throws Exception;


}
