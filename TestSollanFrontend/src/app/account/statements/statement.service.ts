import { Injectable } from "@angular/core";
import { BackendService } from "../../general/backend/backend.service";
import { BackendMappings } from "../../general/utils/backendMappings";
import { Message } from "../message/message";

@Injectable()
export class StatementService {



    constructor(private backendService: BackendService){

    }


    getStatements(){
        return this.backendService.get(BackendMappings.Message.GET_STATEMENTS);
    }

    sendStatement(message: Message){
        return this.backendService.post(BackendMappings.Message.SEND_STATEMENT, message);
    }

}