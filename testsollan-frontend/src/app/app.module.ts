import { HomeService } from './home/home.service';
import { MdComponentsModule } from './../md-components.module';
import { PercentPipe } from '@angular/common';
import { ResultholderService } from './result/resultholder.service';
import { BackendService } from './general/backend/backend.service';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer/timer.service';
import { HttpModule } from '@angular/http';
import { QuestionsService } from './services/questions.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';


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
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdComponentsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'question', component: QuestionsComponent, children: [
          { path: ':id', component: QuestionComponent }
        ]
      },
      { path: 'result', component: ResultComponent },
    ])
  ],
  providers: [QuestionsService,
    TimerService,
    BackendService,
    TimerComponent,
    ResultholderService,
    HomeService,
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
