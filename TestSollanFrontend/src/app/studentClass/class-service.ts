import { BackendMappings } from './../general/utils/backendMappings';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';

@Injectable()
export class StudentClassService{


    constructor(private backendService: BackendService){

    }



    getByIds(ids: string[]){
        let params = new HttpParams();
        params["ids"] = ids;
        return this.backendService.get(BackendMappings.StudentClass.BY_IDS, params);
    }

    getAll(){
        return this.backendService.get(BackendMappings.StudentClass.ALL);
    }

}