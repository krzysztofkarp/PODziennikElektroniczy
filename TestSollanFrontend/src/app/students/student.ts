import { ClassProfile } from './../studentClass/classProfile';
import { UserType } from './../user/userType';
import { User } from './../user/user';

export class Student extends User{

    classId: string;
    profile: ClassProfile
    grades: object;
    comments: StudentComment;
    
    constructor(){
        super();
        this.type = UserType.STUDENT;
        this.grades = {}; 
    }

}

export class StudentComment{

    description: string;
    from: string;

}