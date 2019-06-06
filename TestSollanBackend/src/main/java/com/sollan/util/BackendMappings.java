package com.sollan.util;

public class BackendMappings {
	
	
	private static final String API = "/api";
	
	
	public class Classes{
		
		public static final String ALL = API+"/classes/all";
		public static final String BY_IDS = API + "/classes/byIds";
	}
	
	public class Students{
		public static final String ALL = API +"/student/all";
		public static final String BY_ID = API +"/student/byId";
		public static final String BY_IDS = API +"/student/byIds";
		public static final String PARENTS = API +"/student/parents";
		public static final String UPDATE = API +"/student/update";
	}
	
	public class Teachers{
		public static final String ALL = API + "/teacher/all";
		public static final String BY_ID = API +"/teacher/byId";
	}

	
	public class Login {
		public static final String LOGIN = API + "/login";
	}
	
	public class Notes{
		public static final String BY_STUDENT_ID = API + "/note/studentId";
		public static final String BY_TEACHER_ID = API + "/note/teacherId";
		public static final String ADD = API + "/note/add";
	}

}
