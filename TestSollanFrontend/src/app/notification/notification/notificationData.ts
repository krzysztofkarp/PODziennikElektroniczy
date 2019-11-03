export enum NotificationType{
    ERROR = "ERROR", SUCCESS="SUCCESS", WARNING="WARNING"
}
export class NotificationData{

    message: string;
    type: NotificationType;


    constructor(message: string, type: NotificationType){
        this.message = message;
        this.type = type;
    }
}

