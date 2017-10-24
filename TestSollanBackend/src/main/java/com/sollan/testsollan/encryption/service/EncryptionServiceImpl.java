package com.sollan.testsollan.encryption.service;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.xml.bind.DatatypeConverter;

import com.sollan.testsollan.utils.Consts;

public class EncryptionServiceImpl implements EncryptionService {
	
	
	private SecretKey secKey;
	
	@PostConstruct
	 private void init() throws Exception{
		this.secKey = this.getSecretEncryptionKey();

	 
	 }
	
	
	@Override
	public byte[] encryptText(String plainText, SecretKey secKey) throws Exception {

		
		Cipher aesCipher = Cipher.getInstance("AES");

		aesCipher.init(Cipher.ENCRYPT_MODE, secKey);

		byte[] byteCipherText = aesCipher.doFinal(plainText.getBytes());

		return byteCipherText;

	}

	@Override
	 public String decryptText(byte[] byteCipherText, SecretKey secKey) throws Exception {
		
				
		
		        Cipher aesCipher = Cipher.getInstance("AES");
		
		        aesCipher.init(Cipher.DECRYPT_MODE, secKey);
		
		        byte[] bytePlainText = aesCipher.doFinal(byteCipherText);
		
		        return new String(bytePlainText);
		
		    }


	private SecretKey getSecretEncryptionKey() throws Exception {

		KeyGenerator generator = KeyGenerator.getInstance("AES");

		generator.init(128); // The AES key size in number of bits

		SecretKey secKey = generator.generateKey();

		return secKey;

	}

	private static String bytesToHex(byte[] hash) {

		return DatatypeConverter.printHexBinary(hash);

	}

	public String readFileToString(String filePath) {
		StringBuilder contentBuilder = new StringBuilder();
		try (Stream<String> stream = Files.lines(Paths.get(filePath), StandardCharsets.UTF_8)) {
			stream.forEach(s -> contentBuilder.append(s).append("\n"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		return contentBuilder.toString();
	}

	private void writeToFile(String dataToWrite) {

		
		try {
			
			BufferedWriter bw = new BufferedWriter(new FileWriter(Consts.ENCRYPTED_QUESTIONS_PATH));
			bw.write(dataToWrite);
			bw.close();
		                                            
		}
		catch (IOException e)
		{
		    System.out.println("Exception ");

		}
	}
	
	private void writeToXMLFile(String dataToWrite) {

		
		try {
			
			BufferedWriter bw = new BufferedWriter(new FileWriter(Consts.XML_PATH));
			bw.write(dataToWrite);
			bw.close();
		                                            
		}
		catch (IOException e)
		{
		    System.out.println("Exception ");

		}
	}
	
	
	
	public static byte[] hexStringToByteArray(String s) {
	    int len = s.length();
	    byte[] data = new byte[len / 2];
	    for (int i = 0; i < len; i += 2) {
	        data[i / 2] = (byte) ((Character.digit(s.charAt(i), 16) << 4)
	                             + Character.digit(s.charAt(i+1), 16));
	    }
	    return data;
	}
	
	public void readAndEncryptFile() throws Exception {
		
		String file = this.readFileToString(Consts.QUESTIONS_PATH);
		byte[] cipherText = this.encryptText(file, this.secKey);
		
		
	}
	
	public void readAndDecryptFile() throws Exception {
		
	}
		

	

	public static void main(String[] args) throws Exception {

		EncryptionServiceImpl e = new EncryptionServiceImpl();
		
		SecretKey secKey = e.getSecretEncryptionKey();


		String file = e.readFileToString(Consts.QUESTIONS_PATH);

		byte[] cipherText = e.encryptText(file, secKey);

		//e.writeToFile(new String(cipherText, StandardCharsets.UTF_8));
		
		//Path path = Paths.get(Consts.ENCRYPTED_QUESTIONS_PATH);
		
		//byte[] text = Files.readAllBytes(path);
		
		String decryptedText = e.decryptText(cipherText, secKey);
		
		//e.writeToXMLFile(decryptedText);
		
		System.out.println(decryptedText);

		//System.out.println(bytesToHex(cipherText));
		//System.out.println(decryptedText);
		
		

	}
	
	

}
