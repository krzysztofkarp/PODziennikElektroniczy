import { BackendMappings } from './../general/utils/backendMappings';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from "@angular/core";
import { Consts } from '../general/utils/Consts';
import { Student } from './student';
import { HttpParams } from '@angular/common/http';
import { RequestParams } from '../general/utils/requestParams';
import { ChangePasswordService } from '../account/change-password/change.password.service';
import { ChangePasswordParams } from '../account/change-password/changePasswordParams';

@Injectable()
export class StudentService{


    constructor(private backendService: BackendService){

    }


    getAll(){
        return this.backendService.get(Consts.Students.ALL);
    }

    update(student: Student){
        return this.backendService.post(BackendMappings.Student.SAVE_OR_UPDATE, student);
    }

    byId(id: string){
        let params = {};
        params[RequestParams.ID] = id;
        return this.backendService.get(BackendMappings.Student.BY_ID, params);

    }

    byClassId(classId: string){
        let params = {};
        params[RequestParams.ID] = classId;
        return this.backendService.get(BackendMappings.Student.BY_CLASS_ID, params);

    }

    byParentId(classId: string){
        let params = {};
        params[RequestParams.ID] = classId;
        return this.backendService.get(BackendMappings.Student.BY_PARENT_ID, params);

    }

    byClassIds(ids: string[]){
        let params = {};
        params[RequestParams.IDS] = ids;
        return this.backendService.get(BackendMappings.Student.BY_CLASS_IDS, params);

    }

    byIds(ids: string[]){
        let params = {};
        params[RequestParams.ID] = ids;
        return this.backendService.get(BackendMappings.Student.BY_IDS, params);

    }

    remove(id: string){
        let params = {};
        params[RequestParams.ID] = id;
        return this.backendService.get(BackendMappings.Student.REMOVE, params);
    }

}