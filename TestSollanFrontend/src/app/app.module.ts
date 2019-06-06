import { NoteService } from './note/note.service';
import { StudentClassService } from './studentClass/class-service';
import { AuthGuard } from './authentication/auth.guard';
import { AccountService } from './account/account-view/account-service';
import { StudentService } from './students/student.service';
import { HomeService } from './home/home.service';
import { MdComponentsModule } from './../md-components.module';
import { DatePipe } from '@angular/common';
import { BackendService } from './general/backend/backend.service';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { StudentViewComponent } from './account/student-view/student-view.component';
import { GradeComponent } from './account/student-view/grade/grade.component';
import { TeacherViewComponent } from './account/teacher-view/teacher-view.component';
import { ClassViewComponent } from './account/teacher-view/class-view/class-view.component';
import { StudentPopupComponent } from './account/teacher-view/class-view/student-popup/student-popup.component';
import { NewGradePopupComponent } from './account/teacher-view/class-view/new-grade-popup/new-grade-popup.component';
import { dialogMock } from './user/mock';
import { NotesComponent } from './account/teacher-view/notes/notes.component';
import { NotePopupComponent } from './account/teacher-view/notes/note-popup/note-popup.component';
import { ParentViewComponent } from './account/parent-view/parent-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    AccountViewComponent,
    StudentViewComponent,
    GradeComponent,
    TeacherViewComponent,
    ClassViewComponent,
    StudentPopupComponent,
    NewGradePopupComponent,
    NotesComponent,
    NotePopupComponent,
    ParentViewComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MdComponentsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'login'
      },
      { path: 'login', component: HomeComponent},
      { path: 'account/:id', component: AccountViewComponent, canActivate: [AuthGuard] },
      ])
  ],
  providers: [
    HomeService,
    BackendService,
    FormBuilder,
    AuthGuard,
    StudentService,
    DatePipe,
    StudentClassService,
    AccountService,
    NoteService,
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
    {provide: MatDialogRef, useValue: dialogMock }
  ],
    
  bootstrap: [AppComponent],
  entryComponents: [StudentPopupComponent, NewGradePopupComponent, NotePopupComponent]
})
export class AppModule { }
