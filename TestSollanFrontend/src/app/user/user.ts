import { UserType } from './userType';
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

}