package com.sollan.util;

public class BackendMappings {
	
	
	private static final String API = "/api";
	
	
	public class StudentClass{
		
		public static final String ALL = API+"/classes/all";
		public static final String BY_IDS = API + "/classes/byIds";
	}
	
	public class Student{
		public static final String ALL = API +"/student/all";
		public static final String BY_ID = API +"/student/byId";
		public static final String BY_IDS = API +"/student/byIds";
		public static final String PARENTS = API +"/student/parents";
		public static final String SAVE_OR_UPDATE = API +"/student/saveOrUpdate";
		public static final String REMOVE = API +"/student/remove";
	}
	
	public class Teacher{
		public static final String ALL = API + "/teacher/all";
		public static final String BY_ID = API +"/teacher/byId";
		public static final String SAVE_OR_UPDATE = API +"/teacher/saveOrUpdate";
	}
	
	public class Parent {
		public static final String ALL = API + "/parent/all";
		public static final String BY_ID = API +"/parent/byId";
		public static final String SAVE_OR_UPDATE = API +"/parent/saveOrUpdate";
		public static final String REMOVE = API +"/parent/remove";
	}

	
	public class Login {
		public static final String LOGIN = API + "/login";
	}
	
	public class Note{
		public static final String BY_STUDENT_ID = API + "/note/studentId";
		public static final String BY_TEACHER_ID = API + "/note/teacherId";
		public static final String ADD = API + "/note/add";
	}

}
