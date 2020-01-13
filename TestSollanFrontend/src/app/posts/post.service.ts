import { Injectable } from "@angular/core";
import { BackendService } from "../general/backend/backend.service";
import { BackendMappings } from "../general/utils/backendMappings";
import { Post } from "./post";
import { RequestParams } from "../general/utils/requestParams";

@Injectable()
export class PostService{


    constructor(private backendService: BackendService){

    }


    getAll(){
        return this.backendService.get(BackendMappings.Post.ALL);
    }

    save(post: Post){
        return this.backendService.post(BackendMappings.Post.SAVE, post);
    }

    
    remove(id: string){
        let params = {};
        params[RequestParams.ID] = id;
        return this.backendService.get(BackendMappings.Post.REMOVE, params);
    }



}