export class ChangePasswordParams{


    oldPassword: string;
    newPassword: string;
    repeatPassword: string;

    constructor(){
        
    }



    areValid(){
        return this.newPassword === this.repeatPassword;
    }

}