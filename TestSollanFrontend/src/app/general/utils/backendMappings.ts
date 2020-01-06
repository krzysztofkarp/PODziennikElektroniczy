 export class BackendMappings {
    static readonly INDEX = '/api';
   
    static Student = class {
        static readonly ALL = "/student/all";
        static readonly SAVE_OR_UPDATE = "/student/saveOrUpdate";
        static readonly BY_ID = "/student/byId";
        static readonly BY_CLASS_ID = "/student/byClassId";
        static readonly BY_PARENT_ID = "/student/byParentId";
        static readonly BY_IDS = "/student/byIds";
        static readonly REMOVE = "/student/remove";
        static readonly BY_CLASS_IDS = "/student/byClassIds";
    }

    static Parent = class {
        static readonly ALL = "/parent/all";
        static readonly SAVE_OR_UPDATE = "/parent/saveOrUpdate";
        static readonly BY_ID = "/parent/byId";
        static readonly BY_IDS = "/parent/byIds";
        static readonly REMOVE = "/parent/remove";
        static readonly ADD_CHILDREN = "/parent/addChildren";
    }

    static Teacher = class {
        static readonly ALL = "/teacher/all";
        static readonly SAVE_OR_UPDATE = "/teacher/saveOrUpdate";
        static readonly BY_ID = "/teacher/byId";
        static readonly BY_IDS = "/teacher/byIds";
        static readonly REMOVE = "/teacher/remove";
        static readonly ADD_SUBJECT = "/teacher/addSubject";
		static readonly REMOVE_SUBJECT = "/teacher/removeSubject";
		static readonly ADD_SUBJECTS = "/teacher/addSubjects";
        static readonly REMOVE_SUBJECTS = "/teacher/removeSubjects";
        static readonly ADD_CLASS = "/teacher/addClass";
        static readonly REMOVE_CLASS = "/teacher/removeClass";
        static readonly BY_SUBJECT = "/teacher/bySubject";
        static readonly BY_CLASS_AND_SUBJECT = "/teacher/byClassAndSubject";
    }

    static Login = class {
        static readonly LOGIN = "/login"
        static readonly LOGOUT = "/logout"
        static readonly IS_AUTHENTICATED = "/isAuthenticated";
    }

    static RouterPaths = class {
        static readonly RESULT = '/result';
        static readonly QUESTION = '/question';
        static readonly HOME = '';
    }

    static StudentClass = class {
        static readonly BY_IDS = "/classes/byIds";
        static readonly ALL = "/classes/all";
        static readonly SAVE_OR_UPDATE = "/classes/saveOrUpdate";
        static readonly REMOVE = "/classes/remove";
        static readonly ADD_STUDENT = "/classes/addStudent";
        static readonly ADD_STUDENTS = "/classes/addStudents";
        static readonly ADD_SUBJECTS = "/classes/addSubjects";
        static readonly REMOVE_STUDENT = "/classes/removeStudent";
        static readonly BY_TEACHER_ID = "/classes/byTeacherId";
        static readonly BY_STUDENT_ID = "/classes/byStudentId";
        static readonly REMOVE_SUBJECT ="/classes/removeSubject";
        static readonly BY_TEACHER_AND_SUBJECT = "/classes/byTeacherAndSubject";

        
    }


    static Note = class {
        static readonly BY_STUDENT_ID = "/note/studentId";
        static readonly BY_TEACHER_ID = "/note/teacherId";
        static readonly ADD ="/note/add";
        static readonly REMOVE ="/note/remove";
        static readonly STUDENT_BY_NOTE_ID = "/note/studentByNoteId";
		static readonly TEACHER_BY_NOTE_ID = "/note/teacherByNoteId";
    }
    
    static Grade = class {
		static readonly BY_STUDENT_ID ="/grade/studentId";
		static readonly BY_STUDENT_AND_SUBJECT = "/grade/studentSubjectId";
		static readonly ADD ="/grade/add";
		static readonly REMOVE ="/grade/add";
    }
    
    static  Subject = class {
		static readonly BY_TEACHER_ID ="/subject/byTeacherId";
		static readonly BY_CLASS_ID ="/subject/byClassId";
        static readonly ADD = "/subject/add";
        static readonly ALL = "/subject/all";
		static readonly REMOVE =  "/subject/remove";
    }
    
    static ChangePassword = class {
        static readonly INDEX = "/changePassword"
        static readonly RESET = "/resetPassword"
    }

}