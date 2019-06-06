 export class BackendMappings {
    static readonly INDEX = '/api';
   
    static Students = class {
        static readonly ALL = "/student/all";
        static readonly UPDATE = "/student/update";
        static readonly BY_ID = "/student/byId";
        static readonly BY_IDS = "/student/byIds";
    }



    static Login = class {
        static readonly LOGIN = "/login"
    }

    static RouterPaths = class {
        static readonly RESULT = '/result';
        static readonly QUESTION = '/question';
        static readonly HOME = '';
    }

    static StudentClass = class {
        static readonly BY_IDS = "/classes/byIds";
        static readonly ALL = "/classes/all";
    }

    static Note = class {
        static readonly BY_STUDENT_ID = "/note/studentId";
        static readonly BY_TEACHER_ID = "/note/teacherId";
        static readonly ADD = "/note/add"
    }

}