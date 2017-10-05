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
            const static START = Consts.BackendMapping.INDEX+"/start";
            const static TIME_ELAPSED = Consts.BackendMapping.INDEX+"/timeElapsed";
            const static GET_TIME = Consts.BackendMapping.INDEX+"/getTime";
        }
    }

}
