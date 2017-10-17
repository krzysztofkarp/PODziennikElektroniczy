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
            const static TIME_ELAPSED = '/timeElapsed';
            const static GET_TIME = '/getTime';
            const static GET_STATUS = '/timerStatus';
        };

        static Answers = class {
            const static GET_ANSWERS = "/answers";
            const static CHECK_ANSWERS = "/validateAnswers";
            const static GET_RESULT = "/getResult";
        }

        static Checkers = class {
            const static GET_WAS_STARTED = "/getTimerStarted";            
        }

        static RouterPaths = class {
            const static RESULT = '/result';
            const static QUESTION = '/question';
            const static HOME = '';
        }

    }

    // Consts.BackendMapping.INDEX+
}
