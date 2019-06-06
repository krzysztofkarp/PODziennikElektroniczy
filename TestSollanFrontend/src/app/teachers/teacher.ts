import { Subject } from './../students/subject';
import { User } from './../user/user';

export class Teacher extends User{


    age: number; 
    experience: number;
	isHeadTeacher: boolean;
	subjects: Subject[];
	classesIds: string[];



}