import { User } from './../user/user';
import { UserType } from '../user/userType';

export class Parent extends User{
    

    constructor(){
        super();
        this.type = UserType.PARENT;
    }
}