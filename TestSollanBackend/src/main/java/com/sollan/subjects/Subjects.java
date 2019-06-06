package com.sollan.subjects;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.sollan.classes.model.StudentClass.ClassProfile;

public class Subjects {
	
	
	
	private static Map<ClassProfile, List<Subject>> profile2Subjects = new HashMap<ClassProfile, List<Subject>>();
	
	public static Subject MATEMATYKA = new Subject("matematyka", SubjectType.MATEMATYKA);
	public static Subject BIOLOGIA = new Subject("biologia", SubjectType.BIOLOGIA);
	public static Subject ANGIELSKI = new Subject("jezyk angielski", SubjectType.ANGIELSKI);
	public static Subject NIEMIECKI = new Subject("jezyk niemiecki", SubjectType.NIEMIECKI);
	public static Subject CHEMIA = new Subject("chemia", SubjectType.CHEMIA);
	public static Subject FIZYKA = new Subject("fizyka", SubjectType.FIZYKA);
	public static Subject POLSKI = new Subject("jezyk polski", SubjectType.POLSKI);
	public static Subject HISTORIA = new Subject("historia", SubjectType.HISTORIA);
	public static Subject GEOGRAFIA = new Subject("geografia", SubjectType.GEOGRAFIA);
	public static Subject WOS = new Subject("wos", SubjectType.WOS);
	public static Subject INFORMATYKA = new Subject("informatyka", SubjectType.INFORMATYKA);
	
	public static List<Subject> ALL = Arrays.asList(MATEMATYKA, BIOLOGIA, ANGIELSKI, NIEMIECKI, CHEMIA, FIZYKA, POLSKI, HISTORIA, GEOGRAFIA, WOS, INFORMATYKA);
	
	
	
	static {
		profile2Subjects.put(ClassProfile.MAT_INF, Arrays.asList(MATEMATYKA, ANGIELSKI,NIEMIECKI, FIZYKA, INFORMATYKA, POLSKI, HISTORIA));
		profile2Subjects.put(ClassProfile.HUMAN, Arrays.asList(MATEMATYKA, ANGIELSKI, NIEMIECKI, WOS, INFORMATYKA, POLSKI, HISTORIA));
		profile2Subjects.put(ClassProfile.MAT_GEO, Arrays.asList(MATEMATYKA, ANGIELSKI, NIEMIECKI, GEOGRAFIA, INFORMATYKA, POLSKI, HISTORIA));
		profile2Subjects.put(ClassProfile.BIOL_CHEM, Arrays.asList(MATEMATYKA, ANGIELSKI, NIEMIECKI, FIZYKA, CHEMIA, POLSKI, BIOLOGIA));
	}
	
	
	
	
	
	public static List<Subject> getSubjectsForProfile(ClassProfile profile){
		return profile2Subjects.get(profile);
	}
	
	
	
	public static class Subject {
		
		
		private String subjectName;
		private SubjectType type;
		
		
		
		public Subject() {};
		
		public Subject(String name, SubjectType type) {
			this.subjectName = name;
			this.type = type;
		}
		
		
		public String getSubjectName() {
			return subjectName;
		}

		public void setSubjectName(String subjectName) {
			this.subjectName = subjectName;
		}

		public SubjectType getType() {
			return type;
		}

		public void setType(SubjectType type) {
			this.type = type;
		}


		
		
		
	}
	
	public enum SubjectType{
		
		MATEMATYKA, POLSKI, ANGIELSKI, GEOGRAFIA, HISTORIA, BIOLOGIA, FIZYKA, CHEMIA, WOS, WF, INFORMATYKA, NIEMIECKI
	}
	
	
	

}
