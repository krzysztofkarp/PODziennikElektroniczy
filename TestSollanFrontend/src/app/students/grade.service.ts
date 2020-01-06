import { Injectable } from "@angular/core";
import { BackendService } from "../general/backend/backend.service";
import { BackendMappings } from "../general/utils/backendMappings";
import { Grade } from "./grade";
import { RequestParams } from "../general/utils/requestParams";

@Injectable()
export class GradeService{


    constructor(private backendService: BackendService){

    }

    add(grade: Grade, studentId: string, subjectId: string){
        let params = {};
        params[RequestParams.STUDENT_ID] = studentId;
        params[RequestParams.SUBJECT_ID] = subjectId;
        return this.backendService.post(BackendMappings.Grade.ADD, grade, params);
    }

    remove(studentId: string, subjectId: string, gradeId: string){
        let params = {};
        params[RequestParams.STUDENT_ID] = studentId;
        params[RequestParams.SUBJECT_ID] = subjectId;
        params[RequestParams.GRADE_ID] = subjectId;
        return this.backendService.get(BackendMappings.Grade.REMOVE, params);
    }

   byStudentAndSubject(studentId: string, subjectId: string){
        let params = {};
        params[RequestParams.STUDENT_ID] = studentId;
        params[RequestParams.SUBJECT_ID] = subjectId;
        return this.backendService.get(BackendMappings.Grade.BY_STUDENT_AND_SUBJECT, params);
   }

   byStudentId(studentId: string){
        let params = {};
        params[RequestParams.STUDENT_ID] = studentId;
        return this.backendService.get(BackendMappings.Grade.BY_STUDENT_ID, params);
   }

}