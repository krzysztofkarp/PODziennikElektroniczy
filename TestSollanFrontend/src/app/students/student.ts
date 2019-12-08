import { UserType } from './../user/userType';
import { User } from './../user/user';
import { StudentClass } from '../studentClass/studentClass';

export class Student extends User{
   
    constructor(){
        super();
        this.type = UserType.STUDENT;
    }

}
