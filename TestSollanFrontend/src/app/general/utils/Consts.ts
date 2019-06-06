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

    // Consts.BackendMapping.INDEX+
}
