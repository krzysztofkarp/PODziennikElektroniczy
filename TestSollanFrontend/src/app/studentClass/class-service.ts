import { BackendMappings } from './../general/utils/backendMappings';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
import { StudentClass } from './studentClass';
import { Consts } from '../general/utils/Consts';

@Injectable()
export class StudentClassService{


    constructor(private backendService: BackendService){

    }



    getByIds(ids: string[]){
        let params = new HttpParams();
        params[Consts.RequestParams.IDS] = ids;
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
        params[Consts.RequestParams.CLASS_ID] = classId;
        params[Consts.RequestParams.STUDENT_ID] = studentId;
        return this.backendService.get(BackendMappings.StudentClass.ADD_STUDENT, params);
    }

    removeStudent(classId: string , studentId: string){
        let params = {};
        params[Consts.RequestParams.CLASS_ID] = classId;
        params[Consts.RequestParams.STUDENT_ID] = studentId;
        return this.backendService.get(BackendMappings.StudentClass.REMOVE_STUDENT, params);
    }

    remove(id: string){
        let params = {};
        params[Consts.RequestParams.ID] = id;
        return this.backendService.get(BackendMappings.StudentClass.SAVE_OR_UPDATE, params);
    }

}