import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../students/student';
import { AttendanceService } from '../../teacher-view/teacher-attendance/attendance.service';
import { Attendance } from '../../teacher-view/teacher-attendance/attendance';
import { Util } from '../../../general/utils/util';

@Component({
  selector: 'student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {


  @Input()
  student: Student;


  atts: Attendance[];

  subject2Att: object;
  date2Att: object;
  dates: any[];
  frequency: any;

  constructor(private attService: AttendanceService) {
    this.subject2Att = {};
    this.date2Att = {};
   }

  ngOnInit() {
  }

  ngOnChanges(){
    this.load()
  }

  load(){
    this.attService.fromThisYear(this.student.id).subscribe(resp => {
      this.atts = Util.soryByDate(resp.items);
      this.frequency = ((this.atts.filter(att => att.present).length / this.atts.length) * 100).toFixed(2);
      this.calculate();
    });
  }

  calculate(){
    let dates = Array.from(new Set(this.atts.map(att => att.date)));
    let subs = Array.from(new Set(this.atts.map(att => att.subject.name)));
    
    dates.forEach(date => {
      this.date2Att[date.toString()] = this.atts.filter(att => att.date == date);
    });

    this.dates = Object.entries(this.date2Att);

  }

  getFrequency(atts: Attendance[]){
    return (atts.filter(att => att.present).length / atts.length) * 100;
  }

}
