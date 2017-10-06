import { resultPath } from './../utils/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from './../services/questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

 
  constructor(private route: ActivatedRoute, private router: Router) { }

  private questionId;

  ngOnInit() {
    
   }

  ngDoCheck() {
    this.questionId = localStorage.getItem('currentQuestionId');
  }

  finish() {
    this.router.navigate([resultPath]);
  }

  timerResponse(){
    
  }

}
