import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Post } from '../post';
import { Consts } from '../../general/utils/Consts';

@Component({
  selector: 'app-post-popup',
  templateUrl: './post-popup.component.html',
  styleUrls: ['./post-popup.component.css']
})
export class PostPopupComponent implements OnInit {

  post: Post;

  constructor(public dialogRef: MatDialogRef<PostPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.post = new Post();
    this.post.date = new Date();
    this.post.author = Consts.Messages.ADMIN;
  }

  ngOnInit() {
  }



  onAdd(){
    if(this.post.title && this.post.description){
      this.dialogRef.close(this.post);
    }
  }

  onCancel(){
    this.dialogRef.close();
  }

}
