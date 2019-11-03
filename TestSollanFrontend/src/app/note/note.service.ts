import { BackendMappings } from './../general/utils/backendMappings';
import { BackendService } from './../general/backend/backend.service';
import { Injectable } from '@angular/core';
import { Note } from './note';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class NoteService{


    constructor(private backendService: BackendService){

    }


    add(note: Note){
        let params = new HttpParams();
        params["note"] = note;
        return this.backendService.post(BackendMappings.Note.ADD, null, params);
    }

    fromTeacher(id: string){
        let params = new HttpParams();
        params["id"] = id;
        return this.backendService.get(BackendMappings.Note.BY_TEACHER_ID, params);
    }

    forStudent(id: string){
        let params = new HttpParams();
        params["id"] = id;
        return this.backendService.get(BackendMappings.Note.BY_STUDENT_ID, params);
    }

}