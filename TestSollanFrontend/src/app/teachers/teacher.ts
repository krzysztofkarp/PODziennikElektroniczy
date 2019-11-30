import { Subject } from './../students/subject';
import { User } from './../user/user';
import { UserType } from '../user/userType';

export class Teacher extends User{


	constructor(){
        super();
        this.type = UserType.TEACHER;
    }



}