import { Injectable } from "@angular/core";
import { BackendService } from "../general/backend/backend.service";
import { BackendMappings } from "../general/utils/backendMappings";
import { Consts } from "../general/utils/Consts";
import { Parent } from "./parent";

@Injectable()
export class ParentService {



    constructor(private backendService: BackendService){

    }

    getAll(){
        return this.backendService.get(BackendMappings.Parent.ALL);
    }

    remove(id: string){
        let params = {};
        params[Consts.RequestParams.ID] = id;
        return this.backendService.get(BackendMappings.Parent.REMOVE, params);
    }

    saveOrUpdate(parent: Parent){
        return this.backendService.post(BackendMappings.Parent.SAVE_OR_UPDATE, parent);
    }




}