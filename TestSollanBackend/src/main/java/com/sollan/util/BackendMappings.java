package com.sollan.util;

public class BackendMappings {
	
	
	private static final String API = "/api";
	
	
	public class StudentClass{
		
		public static final String ALL = API+"/classes/all";
		public static final String BY_IDS = API + "/classes/byIds";
		public static final String SAVE_OR_UPDATE = API +"/classes/saveOrUpdate";
		public static final String REMOVE = API +"/classes/remove";
		public static final String ADD_STUDENT = API +"/classes/addStudent";
		public static final String ADD_STUDENTS = API +"/classes/addStudents";
		public static final String ADD_SUBJECTS = API +"/classes/addSubjects";
		public static final String REMOVE_STUDENT = API +"/classes/removeStudent";
		public static final String ADD_SUBJECT = API +"/classes/addSubject";
		public static final String REMOVE_SUBJECT = API +"/classes/removeSubject";
		public static final String BY_TEACHER_ID = API +"/classes/byTeacherId";
		public static final String BY_TEACHER_AND_SUBJECT = API +"/classes/byTeacherAndSubject";
		public static final String BY_STUDENT_ID = API +"/classes/byStudentId";
	}
	
	public class Student{
		public static final String ALL = API +"/student/all";
		public static final String BY_ID = API +"/student/byId";
		public static final String BY_CLASS_ID = API +"/student/byClassId";
		public static final String BY_PARENT_ID = API +"/student/byParentId";
		public static final String BY_IDS = API +"/student/byIds";
		public static final String SAVE_OR_UPDATE = API +"/student/saveOrUpdate";
		public static final String REMOVE = API +"/student/remove";
		public static final String BY_CLASS_IDS = API +"/student/byClassIds";
	}
	
	public class Teacher{
		public static final String ALL = API + "/teacher/all";
		public static final String BY_ID = API +"/teacher/byId";
		public static final String SAVE_OR_UPDATE = API +"/teacher/saveOrUpdate";
		public static final String REMOVE = API +"/teacher/remove";
		public static final String ADD_SUBJECT = API +"/teacher/addSubject";
		public static final String REMOVE_SUBJECT = API +"/teacher/removeSubject";
		public static final String ADD_SUBJECTS = API +"/teacher/addSubjects";
		public static final String REMOVE_SUBJECTS = API +"/teacher/removeSubjects";
		public static final String ADD_CLASS = API +"/teacher/addClass";
		public static final String REMOVE_CLASS = API +"/teacher/removeClass";
		public static final String BY_SUBJECT = API +"/teacher/bySubject";
		public static final String BY_CLASS_AND_SUBJECT = API +"/teacher/byClassAndSubject";
	}
	
	public class Parent {
		public static final String ALL = API + "/parent/all";
		public static final String BY_ID = API +"/parent/byId";
		public static final String SAVE_OR_UPDATE = API +"/parent/saveOrUpdate";
		public static final String REMOVE = API +"/parent/remove";
		public static final String ADD_CHILDREN = API +"/parent/addChildren";
	}

	
	public class Login {
		public static final String LOGIN = API + "/login";
		public static final String LOGOUT = API + "/logout";
		public static final String IS_AUTHENTICATED = API + "/isAuthenticated";
	}
	
	public class Note{
		public static final String BY_STUDENT_ID = API + "/note/studentId";
		public static final String BY_TEACHER_ID = API + "/note/teacherId";
		public static final String ADD = API + "/note/add";
		public static final String REMOVE = API + "/note/remove";
		public static final String STUDENT_BY_NOTE_ID = API + "/note/studentByNoteId";
		public static final String TEACHER_BY_NOTE_ID = API + "/note/teacherByNoteId";
	}
	
	public class Grade{
		public static final String BY_STUDENT_ID = API + "/grade/studentId";
		public static final String BY_STUDENT_AND_SUBJECT = API + "/grade/studentSubjectId";
		public static final String ADD = API + "/grade/add";
		public static final String REMOVE = API + "/grade/add";
		public static final String DOWNLOAD_GRADES = API + "/grade/download";
	}
	
	public class Subject{
		public static final String BY_TEACHER_ID = API + "/subject/byTeacherId";
		public static final String BY_CLASS_ID = API + "/subject/byClassId";
		public static final String ADD = API + "/subject/add";
		public static final String REMOVE = API + "/subject/remove";
		public static final String ALL = API + "/subject/all";
	}
	
	 public class  ChangePassword  {
		 public static final String INDEX = API + "/changePassword";
		 public static final String RESET = API + "/resetPassword";
	}
	 
	 public class  Message  {
		 public static final String SEND_MESSAGE = API + "/message/sendMessage";
		 public static final String SEND_STATEMENT = API + "/message/sendStatement";
		 public static final String GET_STATEMENTS = API + "/message/getStatements";
		 public static final String DELETE_MESSAGE = API + "/message/deleteMessage";
		 public static final String BY_TEACHER_ID = API + "/message/byTeacherId";
		 public static final String BY_STUDENT_ID = API + "/message/byStudentId";
		 public static final String BY_PARENT_ID = API + "/message/byParentId";
		 public static final String BY_TYPE_AND_ID = API + "/message/byTypeAndId";
		 public static final String SET_OPENED = API + "/message/setOpened";
	}
	 
	 public class Attendance {
		 public static final String BY_STUDENT_ID = API + "/attendance/byStudentId";
		 public static final String SAVE = API + "/attendance/save";
		 public static final String UPDATE_ATTENDANCE = API + "/attendance/update";
		 public static final String BY_STUDENT_ID_AND_DATE = API + "/attendance/byIdAndDate";
		 public static final String BY_STUDENT_SUBJECT_AND_DATE = API + "/attendance/byStudentSubjectDate";
		 public static final String FROM_THIS_YEAR = API + "/attendance/fromThisYear";
		 
	 }
	 
	 public class Post {
		 public static final String ALL = API + "/post/all";
		 public static final String SAVE = API + "/post/save";
		 public static final String REMOVE = API + "/post/remove";
	 }
	 

}
