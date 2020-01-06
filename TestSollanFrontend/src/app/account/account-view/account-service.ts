import { Injectable } from "@angular/core";
import { User } from "../../user/user";
import { Student } from "../../students/student";
import { Consts } from "../../general/utils/Consts";
import { StudentService } from "../../students/student.service";
import { TeacherService } from "../../teachers/teacher.service";
import { ParentService } from "../../parents/parent.service";
import { UserService } from "../../user/user.service";

@Injectable()
export class AccountService{

    currentAccount: User | Student;


    constructor(private userService: UserService){

    }


    store(account){
        this.currentAccount = account;
    }

    getCurrent(){
        return this.currentAccount || JSON.parse(localStorage.getItem(Consts.StorageKey.USER))
    }


}