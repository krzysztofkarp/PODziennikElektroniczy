import { QuestionsService } from './../questions/questions.service';
import { TimerService } from './../timer/timer.service';
import { homePath, questionPath, resultPath } from './../general/utils/constants';
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

    this.currentAnswers = JSON.parse(localStorage.getItem('answers'));

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

    if (!sessionStorage.getItem('wasStarted')) {
      this.router.navigate([homePath]);
    }


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

    localStorage.setItem('answers', JSON.stringify(this.currentAnswers));
  }

  findAnswerById() {
      const found = this.currentAnswers.find(ans => {
        return ans.id === this.questionId;
      });

        return found ? found.value : null;
  }

  storeCurrentQuestionId() {
    localStorage.setItem('currentQuestionId', this.questionId);
  }

  loadAnswers() {
    this.questionsService.getAnswers({'questionId': this.questionId})
    .subscribe(answers => {
      this.answers = answers;
      this.answersLoaded = true;
      });
  }




}
