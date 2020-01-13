import { Injectable } from "@angular/core";
import { BackendService } from "../../../general/backend/backend.service";
import { RequestParams } from "../../../general/utils/requestParams";
import { BackendMappings } from "../../../general/utils/backendMappings";
import { Attendance } from "./attendance";

@Injectable()
export class AttendanceService{



    constructor(private backendService: BackendService){

    }



    byStudentId( studentId: string){
        let params = {};
        params[RequestParams.STUDENT_ID] = studentId;
        return this.backendService.get(BackendMappings.Attendance.BY_STUDENT_ID,params)
    }

    byStudentIdAndDate(studentId: string, date: Date){
        let params = {};
        params[RequestParams.STUDENT_ID] = studentId;
        return this.backendService.post(BackendMappings.Attendance.BY_STUDENT_ID_AND_DATE,date,params)
    }

    byStudentSubjectDate(studentId: string, subjectId: string, date: Date){
        let params = {};
        params[RequestParams.SUBJECT_ID] = subjectId;
        params[RequestParams.STUDENT_ID] = studentId;
        return this.backendService.post(BackendMappings.Attendance.BY_STUDENT_SUBJECT_AND_DATE,date,params)
    }


    save(a: Attendance, studentId: string, subjectId: string){
        let params = {};
        params[RequestParams.STUDENT_ID] = studentId;
        params[RequestParams.SUBJECT_ID] = subjectId;
        return this.backendService.post(BackendMappings.Attendance.SAVE, a, params)
    }

    update(studentId: string, subjectId: string, date: Date,  value: boolean){
        let params = {};
        params[RequestParams.VALUE] = value;
        params[RequestParams.STUDENT_ID] = studentId;
        params[RequestParams.SUBJECT_ID] = subjectId;
        return this.backendService.post(BackendMappings.Attendance.UPDATE_ATTENDANCE, date, params)
    }

    fromThisYear(id: string){
        let params = {};
        params[RequestParams.STUDENT_ID] = id;
        return this.backendService.get(BackendMappings.Attendance.FROM_THIS_YEAR, params);
    }


}