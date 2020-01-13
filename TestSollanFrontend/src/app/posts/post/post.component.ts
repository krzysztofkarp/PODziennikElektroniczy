import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';
import { DateParser } from '../../general/utils/dateParser';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input()
  post: Post;

  @Input()
  editable: boolean = false;

  @Output()
  postSaved: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  postDeleted: EventEmitter<any> = new EventEmitter<any>();


  parsedDate: string;

  constructor(private parser: DateParser) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.post){
      this.parsedDate = this.parser.parse(this.post.date);
    }
  }

  onSave(){
    this.postSaved.emit(this.post)
  }

  onDelete(){
    this.postDeleted.emit(this.post.postId)
  }

}
