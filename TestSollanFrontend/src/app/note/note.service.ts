import { Injectable } from '@angular/core';
import { RequestParams } from '../general/utils/requestParams';
import { BackendService } from './../general/backend/backend.service';
import { BackendMappings } from './../general/utils/backendMappings';
import { Note } from './note';

@Injectable()
export class NoteService {


    constructor(private backendService: BackendService) {

    }


    add(note: Note, studentId: string, teacherId: string) {
        let params = {};
        params[RequestParams.TEACHER_ID] = teacherId;
        params[RequestParams.STUDENT_ID] = studentId;
        return this.backendService.post(BackendMappings.Note.ADD, note, params);
    }

    remove(note: Note, studentId: string, teacherId: string) {
        let params = {};
        params[RequestParams.TEACHER_ID] = teacherId;
        params[RequestParams.STUDENT_ID] = studentId;
        return this.backendService.post(BackendMappings.Note.REMOVE, note, params);
    }

    byTeacherId(teacherId: string) {
        let params = {};
        params[RequestParams.TEACHER_ID] = teacherId;
        return this.backendService.get(BackendMappings.Note.BY_TEACHER_ID, params);
    }

    byStudentId(studentId: string) {
        let params = {};
        params[RequestParams.ID] = studentId;
        return this.backendService.get(BackendMappings.Note.BY_STUDENT_ID, params);
    }

    studentByNoteId(noteId: string) {
        let params = {};
        params[RequestParams.NOTE_ID] = noteId;
        return this.backendService.get(BackendMappings.Note.STUDENT_BY_NOTE_ID, params);
    }


    teacherByNoteId(noteId: string) {
        let params = {};
        params[RequestParams.NOTE_ID] = noteId;
        return this.backendService.get(BackendMappings.Note.TEACHER_BY_NOTE_ID, params);
    }


}