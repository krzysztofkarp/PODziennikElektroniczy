import { BackendService } from './general/backend/backend.service';
import { TimerService } from './timer/timer.service';
import { TimerComponent } from './timer/timer.component';
import { HttpModule } from '@angular/http';
import { QuestionsService } from './services/questions.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdGridListModule, MdIconModule, MdRadioModule, MdToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    QuestionsComponent,
    ResultComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdToolbarModule,
    MdIconModule,
    MdRadioModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'question', component: QuestionsComponent, children: [
        { path: ':id', component: QuestionComponent }
      ]},
      { path: 'result', component: ResultComponent },
      { path: 'timerC', component: TimerComponent },      
    ])
  ],
  providers: [
    QuestionsService,
    TimerService,
    BackendService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
