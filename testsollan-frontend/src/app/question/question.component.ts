import { TimerService } from './../timer/timer.service';
import { questionPath } from './../general/utils/constants';
import { QuestionsService } from './../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions = [];
  answers = [];
  currentAnswers = [];
  images = [];
  questionId;
  isRunning;

  questionsLoaded: boolean = false;
  currentAnswerId;
  answersLoaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private service: QuestionsService,
              private router: Router,
              private timerService: TimerService) { }

              
              
    ngDoCheck(){
      if (this.answers.length === 0)
      this.loadAnswers();
    }
  
    ngOnInit() {
      
    this.images = this.service.getImages();
    console.log(this.timerService.getTimerStatus());


    this.route.params
    .subscribe(params => {
      this.questionId = + params['id'];
    });

    //Getting previously checked answers from localStorage
    this.currentAnswers = JSON.parse(localStorage.getItem('answers'));

    if (this.currentAnswers === null)
      this.currentAnswers = [];

      this.currentAnswerId = this.findAnswerById();
      
      this.storeCurrentQuestionId();
      
    }

  nextQuestion() {
    if (this.questionId < 40) {
      this.questionId++;
      this.currentAnswerId = this.findAnswerById();
     }
     this.loadAnswers();
     this.router.navigate([questionPath, this.questionId]);
     this.storeCurrentQuestionId();
   }

  previousQuestion() {
    if (this.questionId > 1) {
      this.questionId--;
      this.currentAnswerId = this.findAnswerById();
    }
    this.loadAnswers();
    this.router.navigate([questionPath, this.questionId]);
    this.storeCurrentQuestionId();
  }

  firstQuestion() {
    this.router.navigate([questionPath, 1]);
    this.questionId = 1;
    this.storeCurrentQuestionId();
    this.loadAnswers();
  }

  lastQuestion() {
    this.router.navigate([questionPath, 40]);
    this.questionId = 40;
    this.storeCurrentQuestionId();
    this.loadAnswers();
  }

  addAnswer(radio: HTMLInputElement) {
      let newAnswer = {
      id: this.questionId,
      value: radio.value
    };

   let found = this.currentAnswers.find(a => {
        return a.id === newAnswer.id
      });

   if (found) {
     found.value = newAnswer.value;
      } else {
        this.currentAnswers.push(newAnswer);
      }

    localStorage.setItem('answers', JSON.stringify(this.currentAnswers));
}

  findAnswerById(){
      let found = this.currentAnswers.find(ans => {
        return ans.id === this.questionId;
      });

      return found ? found.value : null;
  }

  storeCurrentQuestionId() {
    localStorage.setItem('currentQuestionId', this.questionId);
  }

  loadAnswers(){
    this.service.getAnswers({"questionId": this.questionId})
    .subscribe(answers => {
      this.answers = answers;
      this.answersLoaded = true;
  });
  }




}
