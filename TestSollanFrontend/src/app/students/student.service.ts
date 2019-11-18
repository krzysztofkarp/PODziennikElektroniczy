import { BackendMappings } from './../general/utils/backendMappings';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from "@angular/core";
import { Consts } from '../general/utils/Consts';
import { Student } from './student';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class StudentService {


    constructor(private backendService: BackendService){

    }


    getAll(){
        return this.backendService.get(Consts.Students.ALL);
    }

    update(student: Student){
        return this.backendService.post(BackendMappings.Student.SAVE_OR_UPDATE, student);
    }

    byId(id: string){
        let params = new HttpParams();
        params[Consts.RequestParams.ID] = id;
        return this.backendService.get(BackendMappings.Student.BY_ID, params);

    }

    byIds(ids: string[]){
        let params = new HttpParams();
        //params.set()
        return this.backendService.get(BackendMappings.Student.BY_IDS, params);

    }

}