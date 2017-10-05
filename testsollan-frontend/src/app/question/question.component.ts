import { QuestionsService } from './../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions = [];
  answers = [];
  currentAnswers = [];
  images = [];
  userAnswers = [];
  questionId;

  questionsLoaded: boolean = false;
 
  answersLoaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private service: QuestionsService,
              private router: Router) { }

  ngOnInit() {
    this.service.getQuestions()
      .subscribe(questions => {
        this.questions = questions;
        this.questionsLoaded = true;
    });

    this.service.getAnswers()
      .subscribe(answers => {
        for (let x = 0; x < 4; x++) {
          this.answers[x] = answers[x];
        }
        this.answersLoaded = true;

      });

    this.route.params
    .subscribe(params => {
      this.questionId = + params['id'];
    });

    this.images = this.service.getImages();

    this.currentAnswers = JSON.parse(localStorage.getItem('answers'));

    

    }

  nextQ() {
    if (this.questionId < 40) {
      this.questionId++;
    }
    this.router.navigate(['/question', this.questionId]);

    
  }

  previousQ() {
    if (this.questionId > 1) {
      this.questionId--;
    }
    this.router.navigate(['/question', this.questionId]);

  }

  addAnswer(radio: HTMLInputElement) {

    let newAnswer = {
      id: this.questionId,
      value: radio.value
    };

   let found = this.currentAnswers.find(ans => {
        return ans.id === newAnswer.id
      });

    

      if(found) {
        found.value = newAnswer.value;
      } else {
        this.currentAnswers.push(newAnswer);
      }
      
    localStorage.setItem('answers', JSON.stringify(this.currentAnswers));
  
}


}
