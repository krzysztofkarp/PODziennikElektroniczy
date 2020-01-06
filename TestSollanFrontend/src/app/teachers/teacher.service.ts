import { Injectable } from "@angular/core";
import { BackendService } from "../general/backend/backend.service";
import { BackendMappings } from "../general/utils/backendMappings";
import { Teacher } from "./teacher";
import { RequestParams } from "../general/utils/requestParams";
import { Subject } from "../students/subject";

@Injectable()
export class TeacherService{



    constructor(private backendService: BackendService){

    }

    getAll(){
        return this.backendService.get(BackendMappings.Teacher.ALL);
    }

    byId(id: string){
        let params = {};
        params[RequestParams.ID] = id;
        return this.backendService.get(BackendMappings.Teacher.BY_ID, params);
    }

    bySubjectId(subjectId: string){
        let params = {};
        params[RequestParams.SUBJECT_ID] = subjectId;
        return this.backendService.get(BackendMappings.Teacher.BY_SUBJECT, params);
    }

    byClassAndSubjectId(subjectId: string, classId: string){
        let params = {};
        params[RequestParams.SUBJECT_ID] = subjectId;
        params[RequestParams.CLASS_ID] = classId;
        return this.backendService.get(BackendMappings.Teacher.BY_CLASS_AND_SUBJECT, params);
    }

    saveOrUpdate(t: Teacher){
        return this.backendService.post(BackendMappings.Teacher.SAVE_OR_UPDATE, t);
    }

    remove(id: string){
        let params = {};
        params[RequestParams.ID] = id;
        return this.backendService.get(BackendMappings.Teacher.REMOVE, params);
    }

    addSubject(subjectId: string, teacherId: string){
        let params = {};
        params[RequestParams.SUBJECT_ID] = subjectId;
        params[RequestParams.TEACHER_ID] = teacherId;
        return this.backendService.get(BackendMappings.Teacher.ADD_SUBJECT, params);
    }

    removeSubject(subjectId: string, teacherId: string){
        let params = {};
        params[RequestParams.SUBJECT_ID] = subjectId;
        params[RequestParams.TEACHER_ID] = teacherId;
        return this.backendService.get(BackendMappings.Teacher.REMOVE_SUBJECT, params);
    }

    addSubjects(subjectIds: string[], teacherId: string){
        let params = {};
        params[RequestParams.SUBJECT_IDS] = subjectIds;
        params[RequestParams.TEACHER_ID] = teacherId;
        return this.backendService.get(BackendMappings.Teacher.ADD_SUBJECTS, params);
    }

    removeSubjects(subjectIds: string[], teacherId: string){
        let params = {};
        params[RequestParams.SUBJECT_IDS] = subjectIds;
        params[RequestParams.TEACHER_ID] = teacherId;
        return this.backendService.get(BackendMappings.Teacher.REMOVE_SUBJECTS, params);
    }

    addClass(classId: string, teacherId: string, subjectName: string){
        let params = {};
        params[RequestParams.CLASS_ID] = classId;
        params[RequestParams.TEACHER_ID] = teacherId;
        params[RequestParams.SUBJECT_NAME] = subjectName;
        return this.backendService.get(BackendMappings.Teacher.ADD_CLASS, params);
    }

    removeClass(classId: string, teacherId: string, subjectName: string){
        let params = {};
        params[RequestParams.CLASS_ID] = classId;
        params[RequestParams.TEACHER_ID] = teacherId;
        params[RequestParams.SUBJECT_NAME] = subjectName;
        return this.backendService.get(BackendMappings.Teacher.REMOVE_CLASS, params);
    }

}