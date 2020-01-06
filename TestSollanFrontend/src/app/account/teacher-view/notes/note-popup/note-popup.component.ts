import { Note } from './../../../../note/note';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from '../../../../notification/notification.service';
import { Consts } from '../../../../general/utils/Consts';

@Component({
  selector: 'app-note-popup',
  templateUrl: './note-popup.component.html',
  styleUrls: ['./note-popup.component.css']
})
export class NotePopupComponent implements OnInit {


  note: Note;

  constructor(public dialogRef: MatDialogRef<NotePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private nService: NotificationService) {
    this.note = new Note();
   }

  ngOnInit() {

  }

  onAdd(){
    if(this.note.description){
      this.dialogRef.close(this.note);
    } else{
      this.nService.showWarning(Consts.Messages.FILL_ALL_FIELDS);
    }
  }

  onCancel(){
    this.dialogRef.close();
  }

}
