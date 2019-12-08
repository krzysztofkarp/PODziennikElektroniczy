import { UserType } from './userType';
import { StudentClass } from '../studentClass/studentClass';
export class User {

    id: string;
    firstName: string;
    secondName: string; 
    login: string;
    password: string; 
    email: string;
    type: UserType;
    admin: boolean;
    birthdate: Date;
    properties: any;

    constructor(){
        this.properties = {};
    }

}