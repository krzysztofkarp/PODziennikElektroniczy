import { Note } from "../../../../note/note";

export class NoteDeleteParams{

    teacherId: string;
    studentId: string;
    note: Note;

    constructor(teacherId: string, studentId:string ,note: Note){
        this.teacherId = teacherId;
        this.studentId = studentId;
        this.note = note;
    }
}