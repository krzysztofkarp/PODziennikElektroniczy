import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { NotificationComponent } from "./notification/notification.component";
import { NotificationData, NotificationType } from "./notification/notificationData";

@Injectable()
export class NotificationService{


    constructor(private dialog: MatDialog){

    }


    showWarning(message: string){
        let data = new NotificationData(message, NotificationType.WARNING)
        this.show(data);
    }
    
    showSuccess(message: string){
        let data = new NotificationData(message, NotificationType.SUCCESS)
        this.show(data);
    }
    
    showError(message: string){
        let data = new NotificationData(message, NotificationType.ERROR)
        this.show(data);
    }




    private show(data: NotificationData){
        let config = new MatDialogConfig();
        config.data = data;
        config.panelClass = "custom-dialog-container"
        config.width="400px";
        config.hasBackdrop = false;
        let ref = this.dialog.open(NotificationComponent, config);
        setTimeout(() => ref.close(), 2000);
    }

}