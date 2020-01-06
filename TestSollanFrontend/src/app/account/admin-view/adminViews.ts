export enum AdminViewType{
    USER_MANAGEMENT = "USER_MANAGEMENT", CLASS_MANAGEMENT="CLASS_MANAGEMENT", SUBJECT_MANAGEMENT="SUBJECT_MANAGEMENT"
}

export class AdminView{

    title: string;
    type: AdminViewType;

    constructor(title, type){
        this.title = title;
        this.type = type;
    }

    static USER_MAN = new AdminView("Użytkownicy", AdminViewType.USER_MANAGEMENT);
    static CLASS_MAN = new AdminView("Klasy", AdminViewType.CLASS_MANAGEMENT);
    static SUBJECT_MAN = new AdminView("Przedmioty", AdminViewType.SUBJECT_MANAGEMENT);
    static ADMIN_VIEWS = [AdminView.USER_MAN, AdminView.CLASS_MAN, AdminView.SUBJECT_MAN];
   
}
