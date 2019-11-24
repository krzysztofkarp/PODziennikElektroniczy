export class Response<T> {
    item?: T;
    items?: T[];
    type: ResponseType;


    constructor(){
        
    }

    static isOk(r: Response<any>){
        return r.type == ResponseType.OK;
    }
}

export enum ResponseType{
    OK = "OK", ERROR = "ERROR"
}
