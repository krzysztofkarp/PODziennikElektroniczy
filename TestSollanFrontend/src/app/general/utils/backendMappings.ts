 export class BackendMappings {
    static readonly INDEX = '/api';
   
    static Student = class {
        static readonly ALL = "/student/all";
        static readonly SAVE_OR_UPDATE = "/student/saveOrUpdate";
        static readonly BY_ID = "/student/byId";
        static readonly BY_IDS = "/student/byIds";
        static readonly REMOVE = "/student/remove";
    }

    static Parent = class {
        static readonly ALL = "/parent/all";
        static readonly SAVE_OR_UPDATE = "/parent/saveOrUpdate";
        static readonly BY_ID = "/parent/byId";
        static readonly BY_IDS = "/parent/byIds";
        static readonly REMOVE = "/parent/remove";
    }

    static Teacher = class {
        static readonly ALL = "/teacher/all";
        static readonly SAVE_OR_UPDATE = "/teacher/saveOrUpdate";
        static readonly BY_ID = "/teacher/byId";
        static readonly BY_IDS = "/teacher/byIds";
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
        static readonly SAVE_OR_UPDATE = "/classes/saveOrUpdate";
        static readonly REMOVE = "/classes/remove";
    }

    static Note = class {
        static readonly BY_STUDENT_ID = "/note/studentId";
        static readonly BY_TEACHER_ID = "/note/teacherId";
        static readonly ADD = "/note/add"
    }

}