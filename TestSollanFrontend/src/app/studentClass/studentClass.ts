import { ClassProfile } from './classProfile';
import { Teacher } from './../teachers/teacher';
import { Student } from '../students/student';
export class StudentClass{

    classId: string;
	studentsAmount: number;
	headTeacher: Teacher;
	profile: ClassProfile;
	students: Student[];
}