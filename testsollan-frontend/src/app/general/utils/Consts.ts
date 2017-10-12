export class Consts {

    static Headers = class {
        static Key = class {
            const static ACCEPT = 'Accept';
            const static CONTENT_TYPE = 'Content-Type';
        };
        static Value = class {
            const static APPLICATION_JSON = 'application/json';
        };
    };

    static BackendMapping = class {
        const static INDEX = '/api';
        static Timer = class {
            const static START = '/startTimer';
            const static STOP = '/stopTimer';
            const static GET_TIME = '/getTime';
        };

        static Answers = class {
            const static GET_ANSWERS = "/answers";
            const static CHECK_ANSWERS = "/validateAnswers";
        }

        static Checkers = class {
            const static GET_WAS_STARTED = "/getTimerStarted";            
        }

    }

    // Consts.BackendMapping.INDEX+
}
