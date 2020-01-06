import { Injectable } from "@angular/core";
import { BackendService } from "../../../general/backend/backend.service";
import { ThrowStmt } from "@angular/compiler";
import { BackendMappings } from "../../../general/utils/backendMappings";
import { Subject } from "../../../students/subject";
import { RequestParams } from "../../../general/utils/requestParams";

@Injectable()
export class SubjectService{



    constructor(private backendService: BackendService){

    }


    getAll(){
        return this.backendService.get(BackendMappings.Subject.ALL);
    }



    save(subject: Subject){
        return this.backendService.post(BackendMappings.Subject.ADD, subject);
    }

    remove(subject: Subject){
        return this.backendService.post(BackendMappings.Subject.REMOVE, subject);
    }

    byTeacherId(teacherId: string){
        let params = {};
        params[RequestParams.TEACHER_ID] = teacherId;
        return this.backendService.get(BackendMappings.Subject.BY_TEACHER_ID, params);
    }

    byClassId(classId: string){
        let params = {};
        params[RequestParams.CLASS_ID] = classId;
        return this.backendService.get(BackendMappings.Subject.BY_CLASS_ID, params);
    }

}