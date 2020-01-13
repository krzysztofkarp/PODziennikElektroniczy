import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { MatDialog } from '@angular/material';
import { PostPopupComponent } from '../post-popup/post-popup.component';
import { Response } from '../../general/backend/response';
import { NotificationService } from '../../notification/notification.service';
import { Consts } from '../../general/utils/Consts';
import { Util } from '../../general/utils/util';

@Component({
  selector: 'posts-main-view',
  templateUrl: './posts-main-view.component.html',
  styleUrls: ['./posts-main-view.component.css']
})
export class PostsMainViewComponent implements OnInit {


  posts: Post[];


  @Input()
  isAdmin: boolean = false;

  constructor(private service: PostService, private dialog: MatDialog, private nService: NotificationService) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.service.getAll().subscribe(resp => this.posts = resp.items.reverse());
  }

  onAdd(){
    this.dialog.open(PostPopupComponent).afterClosed().subscribe(post => {
      if(post){
        this.service.save(post).subscribe(resp => {
          if(Response.isOk(resp)){
            this.nService.showSuccess(Consts.Messages.POST_ADDED);
            this.posts.unshift(resp.item);
          } else {
            this.nService.showError(Consts.Messages.POST_ADDED_ERROR);
          }
        })
      }
    })
  }

  savePost(post: Post){
    this.service.save(post).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.POST_SAVED);
        let found = this.posts.find(p => p.postId == post.postId);
        found.description = resp.item.description;
        found.title = resp.item.title;
      } else {
        this.nService.showError(Consts.Messages.POST_SAVED_ERROR);
      }
    })
  }

  removePost(id: string){
    this.service.remove(id).subscribe(resp => {
      if(Response.isOk(resp)){
        this.posts = this.posts.filter(p => p.postId != id);
        this.nService.showSuccess(Consts.Messages.POST_REMOVED);
      } else {
        this.nService.showError(Consts.Messages.POST_REMOVED_ERROR);
      }
    })
  } 
}
