import { Injectable } from "@angular/core";

@Injectable()
export class DateParser{

    months = ["stycznia ", "lutego ", "marca ", "kwietnia ", "maja ", "czerwca ", "lipca ", "sierpnia ", "września ", "października ", "listopada ", "grudnia "]
  



    parse(date: Date){
        let d = new Date(date);
        return d.getDate() + " " + this.months[d.getMonth()] + d.getFullYear();
    }

    calculateAge(dob: Date){
        let ageDifMs = Date.now() - dob.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }




}