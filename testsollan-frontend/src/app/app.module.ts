import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdGridListModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'question', component: QuestionsComponent, children: [
        { path: ':id', component: QuestionComponent }
      ] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
