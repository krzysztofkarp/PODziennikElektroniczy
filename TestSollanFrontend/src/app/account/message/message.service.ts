import { Injectable } from "@angular/core";
import { BackendService } from "../../general/backend/backend.service";
import { Message } from "./message";
import { RequestParams } from "../../general/utils/requestParams";
import { BackendMappings } from "../../general/utils/backendMappings";
import { UserType } from "../../user/userType";

@Injectable()
export class MessageService{


    constructor(private backendService: BackendService){

    }



    send(m: Message, senderId: string, recipientId: string){
        let params = {};
        params[RequestParams.SENDER_ID] = senderId;
        params[RequestParams.RECIPIENT_ID] = recipientId;
        return this.backendService.post(BackendMappings.Message.SEND_MESSAGE, m, params);
    }

    byTeacherId(teacherId:string){
        let params = {};
        params[RequestParams.TEACHER_ID] = teacherId;
        return this.backendService.get(BackendMappings.Message.BY_TEACHER_ID, params);
    }

    byStudentId(studentId:string){
        let params = {};
        params[RequestParams.STUDENT_ID] = studentId;
        return this.backendService.get(BackendMappings.Message.BY_STUDENT_ID, params);
    }

    byParentId(parentId:string){
        let params = {};
        params[RequestParams.PARENT_ID] = parent;
        return this.backendService.get(BackendMappings.Message.BY_PARENT_ID, params);
    }

    byTypeAndId(messageId:string, type: UserType){
        let params = {};
        params[RequestParams.MESSAGE_ID] = messageId;
        params[RequestParams.TYPE] = type;
        return this.backendService.get(BackendMappings.Message.BY_TYPE_AND_ID, params);
    }

    setOpened(messageId:string){
        let params = {};
        params[RequestParams.MESSAGE_ID] = messageId;
        return this.backendService.get(BackendMappings.Message.SET_OPENED, params);
    }

}