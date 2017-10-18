import { Consts } from './../general/utils/Consts';
import { QuestionsService } from './../questions/questions.service';
import { TimerService } from './../timer/timer.service';
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

  questionsLoaded = false;
  answersLoaded = false;
  currentAnswerId;


  constructor(private route: ActivatedRoute,
              private questionsService: QuestionsService,
              private router: Router,
              private timerService: TimerService) { }


  ngOnInit() {
    this.images = this.questionsService.getImages();

    this.route.params
      .subscribe(params => {
      this.questionId = + params['id'];
    });

    this.currentAnswers = JSON.parse(localStorage.getItem(Consts.Other.ANSWERS));

    if (!this.currentAnswers) {

      this.currentAnswers = [];
      this.currentAnswerId = this.findAnswerById();
      this.storeCurrentQuestionId();
    }


    }

  ngDoCheck() {
    if (!this.answers.length) {
      this.loadAnswers();
    }

    if (!sessionStorage.getItem(Consts.Other.WAS_STARTED)) {
      this.router.navigate([Consts.BackendMapping.RouterPaths.HOME]);
    }


    }

  nextQuestion() {
    if (this.questionId < 40) {
      this.questionId++;
      this.currentAnswerId = this.findAnswerById();
     }
     this.loadAnswers();
     this.router.navigate([Consts.BackendMapping.RouterPaths.QUESTION, this.questionId]);
     this.storeCurrentQuestionId();
   }

  previousQuestion() {
    if (this.questionId > 1) {
      this.questionId--;
      this.currentAnswerId = this.findAnswerById();
    }
    this.loadAnswers();
    this.router.navigate([Consts.BackendMapping.RouterPaths.QUESTION, this.questionId]);
    this.storeCurrentQuestionId();
  }

  firstQuestion() {
    this.router.navigate([Consts.BackendMapping.RouterPaths.QUESTION, 1]);
    this.questionId = 1;
    this.storeCurrentQuestionId();
    this.loadAnswers();
  }

  lastQuestion() {
    this.router.navigate([Consts.BackendMapping.RouterPaths.QUESTION, 40]);
    this.questionId = 40;
    this.storeCurrentQuestionId();
    this.loadAnswers();
  }

  addAnswer(radio: HTMLInputElement) {
      const newAnswer = {
      id: this.questionId,
      value: radio.value
    };

   const found = this.currentAnswers.find(a => {
        return a.id === newAnswer.id;
      });

   if (found) {
     found.value = newAnswer.value;
      } else {
        this.currentAnswers.push(newAnswer);
      }

    localStorage.setItem(Consts.Other.ANSWERS, JSON.stringify(this.currentAnswers));
  }

  findAnswerById() {
      const found = this.currentAnswers.find(ans => {
        return ans.id === this.questionId;
      });

        return found ? found.value : null;
  }

  storeCurrentQuestionId() {
    localStorage.setItem(Consts.Other.CURRENT_QUESTION_ID, this.questionId);
  }

  loadAnswers() {
    this.questionsService.getAnswers({'questionId': this.questionId})
    .subscribe(answers => {
      this.answers = answers;
      this.answersLoaded = true;
      });
  }




}