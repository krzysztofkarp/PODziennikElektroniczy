import { ClassProfile } from './classProfile';
import { Teacher } from './../teachers/teacher';
import { Student } from '../students/student';
import { Subject } from '../students/subject';

export class StudentClass{

    classId: string;
	name: string;
	profile: ClassProfile;
	subjects: Subject[];
	teachers: Teacher[];
	numberOfStudents: number;
}



