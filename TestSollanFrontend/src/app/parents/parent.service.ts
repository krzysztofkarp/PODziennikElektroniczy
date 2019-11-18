import { Injectable } from "@angular/core";
import { BackendService } from "../general/backend/backend.service";
import { BackendMappings } from "../general/utils/backendMappings";

@Injectable()
export class ParentService {



    constructor(private backendService: BackendService){

    }

    getAll(){
        return this.backendService.get(BackendMappings.Parent.ALL);
    }




}