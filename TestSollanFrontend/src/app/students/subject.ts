import { StudentClass } from "../studentClass/studentClass";
import { Teacher } from "../teachers/teacher";

export class Subject {

    subjectId: string;
    name: string;
    classes: StudentClass[];
    teachers: Teacher[];
}
