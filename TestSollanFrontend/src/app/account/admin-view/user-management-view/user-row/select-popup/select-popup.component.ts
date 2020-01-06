import { Component, OnInit, Inject, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatCheckbox } from '@angular/material';

@Component({
  selector: 'app-select-popup',
  templateUrl: './select-popup.component.html',
  styleUrls: ['./select-popup.component.css']
})
export class SelectPopupComponent implements OnInit {


  selectedItem;
  selectedItems;

  @ViewChildren(MatCheckbox)
  boxes: MatCheckbox[];
  

  constructor(private dialogRef: MatDialogRef<SelectPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if(this.data.select){
      this.selectedItem = this.data.items[0];
    }
  }

  onSave(){
    this.dialogRef.close(this.data.select ? this.selectedItem : this.boxes.filter(b => b.checked).map(b => b.value))
  }

  onCancel(){
    this.dialogRef.close();
  }

}
