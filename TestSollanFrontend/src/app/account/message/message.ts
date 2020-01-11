import { UserType } from "../../user/userType";

export class Message{

    messageId: string;
    sender: UserType;
    recipient: UserType;
    opened: boolean;
    date: Date;
    message: string;
    title: string;

    constructor(){
        this.opened = false;
    }
}