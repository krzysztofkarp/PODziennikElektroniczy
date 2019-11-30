export class Consts {

    static Headers = class {
        static Key = class {
            static readonly ACCEPT = 'Accept';
            static readonly CONTENT_TYPE = 'Content-Type';
        };
        static Value = class {
            static readonly APPLICATION_JSON = 'application/json';
        };
    };


    static Other = class {
        static readonly YES = 'yes';
        static readonly NO = 'no';
        static readonly QUESTION_ID = 'questionId';
        static readonly CURRENT_QUESTION_ID = 'currentQuestionId';
        static readonly WAS_STARTED = 'wasStarted';
        static readonly ANSWERS = 'answers';
        static readonly IMG = 'img/q';
        static readonly JPG = '.jpg';
        static readonly TIME_OVER = '0:00';
        static readonly NO_ANSWERS = 'No answers checked!';
        static readonly NAME = 'name';
        static readonly ONE = '1';
    }

    static Students = class {
        static readonly ALL = "/student/all";
    }

    static Messages = class {
        static readonly WRONG_CREDENTIALS = "Wrong credentials";
        static readonly NOT_LOGGED_IN = "You are currently not logged in, please log in!"
        static readonly NEW_USER = "New user";
        static readonly NEW_CLASS = "New class";
        static readonly USER_SAVED = "User saved";
        static readonly USER_SAVE_ERROR = "Cannot save user! Error occured"
        static readonly STUDENT_SAVED= "Student saved"
        static readonly STUDENT_DELETED= "Student deleted"
        static readonly TEACHER_SAVED= "Teacher saved"
        static readonly TEACHER_DELETED= "Teacher deleted"
        static readonly PARENT_SAVED= "Parent saved"
        static readonly PARENT_DELETED= "Parent deleted"
        static readonly CLASS_SAVE_ERROR = "Cannot save class! Error occured"
        static readonly CLASS_SAVED = "Class saved";
    }

    static StorageKey = class {
        static readonly USER = "user";
    }

    static FormFields = class {
        static readonly LOGIN = "login";
        static readonly PASSWORD = "password";
    }

    static RouterPaths = class {
        static readonly ACCOUNT = "/account";
        static readonly LOGIN = "/login";
    }

    static RequestParams = class {
        static readonly STUDENT = "student";
        static readonly ID = "id";
    }

    static Regex = class {
        static CLASS_NAME = new RegExp("\w*[0-9]\w*[A-Z]\w*");    
    }



    // Consts.BackendMapping.INDEX+
}
