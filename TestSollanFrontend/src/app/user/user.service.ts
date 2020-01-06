import { Injectable } from "@angular/core";
import { BackendService } from "../general/backend/backend.service";
import { User } from "./user";
import { RequestParams } from "../general/utils/requestParams";

@Injectable()
export class UserService{



    constructor(private backendService: BackendService){

    }




    saveUser(user: User, uri: string){
        return this.backendService.post(uri, user);
    }

    byId(uri: string, id: string){
        let params = {};
        params[RequestParams.ID] = id;
        return this.backendService.get(uri, params);
    }

} 