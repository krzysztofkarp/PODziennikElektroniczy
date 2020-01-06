import { BackendMappings } from './../general/utils/backendMappings';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
import { StudentClass } from './studentClass';
import { Consts } from '../general/utils/Consts';
import { RequestParams } from '../general/utils/requestParams';

@Injectable()
export class StudentClassService{


    constructor(private backendService: BackendService){

    }



    getByIds(ids: string[]){
        let params = new HttpParams();
        params[RequestParams.IDS] = ids;
        return this.backendService.get(BackendMappings.StudentClass.BY_IDS, params);
    }

    getAll(){
        return this.backendService.get(BackendMappings.StudentClass.ALL);
    }

    saveOrUpdate(cl: StudentClass){
        return this.backendService.post(BackendMappings.StudentClass.SAVE_OR_UPDATE, cl);
    }

    addStudent(classId: string , studentId: string){
        let params = {};
        params[RequestParams.CLASS_ID] = classId;
        params[RequestParams.STUDENT_ID] = studentId;
        return this.backendService.get(BackendMappings.StudentClass.ADD_STUDENT, params);
    }

    addStudents(classId: string , ids: string[]){
        let params = {};
        params[RequestParams.CLASS_ID] = classId;
        params[RequestParams.IDS] = ids;
        return this.backendService.get(BackendMappings.StudentClass.ADD_STUDENTS, params);
    }

    addSubjects(classId: string , ids: string[]){
        let params = {};
        params[RequestParams.CLASS_ID] = classId;
        params[RequestParams.IDS] = ids;
        return this.backendService.get(BackendMappings.StudentClass.ADD_SUBJECTS, params);
    }

    removeSubject(classId: string , subjectId: string){
        let params = {};
        params[RequestParams.CLASS_ID] = classId;
        params[RequestParams.SUBJECT_ID] = subjectId;
        return this.backendService.get(BackendMappings.StudentClass.REMOVE_SUBJECT, params);
    }


    removeStudent(classId: string , studentId: string){
        let params = {};
        params[RequestParams.CLASS_ID] = classId;
        params[RequestParams.STUDENT_ID] = studentId;
        return this.backendService.get(BackendMappings.StudentClass.REMOVE_STUDENT, params);
    }

    remove(cl: StudentClass){
        return this.backendService.post(BackendMappings.StudentClass.REMOVE, cl);
    }

    byTeacherId(id: string){
        let params = {};
        params[RequestParams.TEACHER_ID] = id;
        return this.backendService.get(BackendMappings.StudentClass.BY_TEACHER_ID, params);
    }

    byTeacherAndSubject(tId: string, sId: string){
        let params = {};
        params[RequestParams.TEACHER_ID] = tId;
        params[RequestParams.SUBJECT_ID] = sId;
        return this.backendService.get(BackendMappings.StudentClass.BY_TEACHER_AND_SUBJECT, params);
    }

    byStudentId(id: string){
        let params = {};
        params[RequestParams.STUDENT_ID] = id;
        return this.backendService.get(BackendMappings.StudentClass.BY_STUDENT_ID, params);
    }

}