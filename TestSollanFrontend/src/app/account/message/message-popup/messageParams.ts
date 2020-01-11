import { Message } from "../message";

export class MessageParams{

    message: Message;
    recipientId: string;

    constructor(m: Message, id: string){
        this.message = m;
        this.recipientId = id;
    }
}