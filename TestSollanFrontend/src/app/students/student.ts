import { UserType } from './../user/userType';
import { User } from './../user/user';

export class Student extends User{

   
    constructor(){
        super();
        this.type = UserType.STUDENT;
    }

}
