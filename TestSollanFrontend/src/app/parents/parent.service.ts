import { Injectable } from "@angular/core";
import { BackendService } from "../general/backend/backend.service";
import { BackendMappings } from "../general/utils/backendMappings";
import { Parent } from "./parent";
import { RequestParams } from "../general/utils/requestParams";

@Injectable()
export class ParentService {



    constructor(private backendService: BackendService){

    }

    getAll(){
        return this.backendService.get(BackendMappings.Parent.ALL);
    }

    remove(id: string){
        let params = {};
        params[RequestParams.ID] = id;
        return this.backendService.get(BackendMappings.Parent.REMOVE, params);
    }

    saveOrUpdate(parent: Parent){
        return this.backendService.post(BackendMappings.Parent.SAVE_OR_UPDATE, parent);
    }

    addChildren(ids: string[], parentId: string){
        let params = {};
        params[RequestParams.CHILDREN_IDS] = ids;
        params[RequestParams.PARENT_ID] = parentId;
        return this.backendService.get(BackendMappings.Parent.ADD_CHILDREN, params);
    }




}