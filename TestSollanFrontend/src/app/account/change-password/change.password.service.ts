import { Injectable } from "@angular/core";
import { BackendService } from "../../general/backend/backend.service";
import { User } from "../../user/user";
import { ChangePasswordParams } from "./changePasswordParams";
import { RequestParams } from "../../general/utils/requestParams";
import { BackendMappings } from "../../general/utils/backendMappings";

@Injectable()
export class ChangePasswordService{
    

    constructor(private backendService: BackendService){

    }



    changePassword(user: User, params: ChangePasswordParams){
        let p = {}
        p[RequestParams.USER_ID] = user.id;
        p[RequestParams.USER_TYPE] = user.type;
        return this.backendService.post(BackendMappings.ChangePassword.INDEX, params, p);

    }

    resetPassword(user: User, newPassword: string){
        let p = {}
        p[RequestParams.USER_ID] = user.id;
        p[RequestParams.USER_TYPE] = user.type;
        p[RequestParams.NEW_PASSWORD] = newPassword;
        return this.backendService.get(BackendMappings.ChangePassword.RESET, p);

    }
}