import { Injectable } from "@angular/core";
import { User } from "../../user/user";
import { Student } from "../../students/student";

@Injectable()
export class AccountService{

    currentAccount: User | Student;




    store(account){
        this.currentAccount = account;
    }

    getCurrent(){
        let item = localStorage.getItem("user");
        return  JSON.parse(item);
    }

}