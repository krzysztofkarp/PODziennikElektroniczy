import { Injectable } from "@angular/core";
import { BackendService } from "../general/backend/backend.service";
import { User } from "./user";

@Injectable()
export class UserService{



    constructor(private backendService: BackendService){

    }




    saveUser(user: User, uri: string){
        return this.backendService.post(uri, user);
    }

} 