import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionId;
  
  
  
  
  constructor(private route: ActivatedRoute) { }

  
  
  
  
  
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.questionId = + params['id'];
      })
  }

  nextQ(){
    if(this.questionId<40)
      this.questionId++;
  }

  previousQ(){
    if(this.questionId>1)
      this.questionId--;
  }

}
