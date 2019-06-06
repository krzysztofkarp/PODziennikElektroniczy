package com.sollan.user.generator;

import java.util.Random;

import com.sollan.classes.model.StudentClass;
import com.sollan.classes.model.StudentClass.ClassProfile;

public class UserFieldsGenerator {
	
	
	private static String[] studentNames  = { "Tomasz", "Piotr", "Kamil", "Wojciech", "Sebastian", "Krzysztof", "Radosław", "Jakub", "Kacper", "Weronika", "Justyna", "Maria"};
	private static String[] studentSurnames = { "Nowak", "Kowal", "Lorenc", "Kurek", "Kubica", "Drut", "Pasik", "Duda", "Korwin", "Kosiba", "Kuk", "Mleczak", "Smal"};
	
	private static int[] classNumbers = { 1, 2, 3, 4 };
	private static String[] classLetters = { "A", "B", "C", "D"};
	private static Random rand = new Random();
	private static int min = 15;
	private static int max = 35;
	public static String[] defaultClasses = {"1A", "1B", "1C", "1D", "2A", "2B", "2C", "2D", "3A", "3B", "3C", "3D", "4A", "4B", "4C", "4D"};
	
	
	
	public static String getName() {
		return studentNames[rand.nextInt(studentNames.length)];
	}
	
	public static String getSurname() {
		return studentSurnames[rand.nextInt(studentSurnames.length)];
	}
	
	public static ClassProfile getProfile() {
		ClassProfile[] profiles = ClassProfile.values();
		return profiles[rand.nextInt(profiles.length)];
	}
	
	public static String getClassId() {
		return classNumbers[rand.nextInt(classNumbers.length)] + classLetters[rand.nextInt(classLetters.length)];
	}
	
	public static ClassProfile getProfile(String classId) {
		String classLetter = classId.substring(1);
		ClassProfile cp = ClassProfile.DEFAULT;
		switch(classLetter) {
		
			case "A": cp = ClassProfile.MAT_INF;
			case "B": cp  = ClassProfile.BIOL_CHEM;
			case "C": cp = ClassProfile.MAT_GEO;
			case "D": cp = ClassProfile.HUMAN;
		
		}
		
		return cp;
	}

}
