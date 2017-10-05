import { TimerService } from './timer/timer.service';
import { BackendService } from './general/backend/backend.service';
import { Http, HttpModule } from '@angular/http';
import { QuestionsService } from './services/questions.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdGridListModule, MdIconModule, MdRadioModule } from '@angular/material';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    QuestionsComponent,
    TimerComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdRadioModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'question', component: QuestionsComponent, children: [
      { path: ':id', component: QuestionComponent }
      ] },
      { path: 'timer', component: TimerComponent}
      
    ])
  ],
  providers: [
    QuestionsService,
    HttpModule,
    BackendService,
    TimerService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
