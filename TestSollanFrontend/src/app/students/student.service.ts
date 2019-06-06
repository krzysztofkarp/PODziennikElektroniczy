import { Grade } from './grade';
import { BackendMappings } from './../general/utils/backendMappings';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from "@angular/core";
import { Consts } from '../general/utils/Consts';
import { Student } from './student';

@Injectable()
export class StudentService {


    constructor(private backendService: BackendService){

    }


    getAll(){
        return this.backendService.get(Consts.Students.ALL);
    }

    update(student: Student){
        let params = {};
        params["student"] = JSON.stringify(student);
        return this.backendService.get(BackendMappings.Students.UPDATE, params);
    }

    byId(id: string){
        let params = {};
        params["id"] = id;
        return this.backendService.get(BackendMappings.Students.BY_ID, params);

    }

    byIds(ids: string[]){
        let params = {};
        params["ids"] = ids;
        return this.backendService.get(BackendMappings.Students.BY_IDS, params);

    }

}