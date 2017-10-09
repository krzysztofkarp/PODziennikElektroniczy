export class Consts {
    
    static Headers = class {
        static Key = class {
            const static ACCEPT = 'Accept';
            const static CONTENT_TYPE = 'Content-Type';
        }
        static Value = class {
            const static APPLICATION_JSON = 'application/json';
        }
    }

    static BackendMapping = class {
        const static INDEX = "/api"
        static Timer = class {
            const static TIME_ELAPSED ="/timeElapsed";
            const static GET_TIME = "/getTime";
            const static START = "/startTimer";
            
        }
    }
    //Consts.BackendMapping.INDEX+
}
