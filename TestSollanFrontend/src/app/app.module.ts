import { NoteService } from './note/note.service';
import { StudentClassService } from './studentClass/class-service';
import { AuthGuard } from './authentication/auth.guard';
import { AccountService } from './account/account-view/account-service';
import { StudentService } from './students/student.service';
import { AuthService } from './home/auth.service';
import { MdComponentsModule } from './../md-components.module';
import { DatePipe } from '@angular/common';
import { BackendService } from './general/backend/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
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
import { AdminViewComponent } from './account/admin-view/admin-view.component';
import { NotificationComponent } from './notification/notification/notification.component';
import { NotificationService } from './notification/notification.service';
import { UserManagementViewComponent } from './account/admin-view/user-management-view/user-management-view.component';
import { AddUserPopupComponent } from './account/admin-view/user-management-view/add-user-popup/add-user-popup.component';
import { ParentService } from './parents/parent.service';
import { TeacherService } from './teachers/teacher.service';
import { UserService } from './user/user.service';
import { UserManagementStudentViewComponent } from './account/admin-view/user-management-view/user-management-student-view/user-management-student-view.component';
import { UserManagementTeacherViewComponent } from './account/admin-view/user-management-view/user-management-teacher-view/user-management-teacher-view.component';
import { UserManagementParentViewComponent } from './account/admin-view/user-management-view/user-management-parent-view/user-management-parent-view.component';
import { UserRowComponent } from './account/admin-view/user-management-view/user-row/user-row.component';
import { GenericUserContainerComponent } from './account/admin-view/user-management-view/generic-user-container/generic-user-container.component';
import { ClassManagementViewComponent } from './account/admin-view/class-management-view/class-management-view.component';
import { AddClassPopupComponent } from './account/admin-view/class-management-view/add-class-popup/add-class-popup.component';
import { ClassDetailsComponent } from './account/admin-view/class-management-view/class-details/class-details.component';


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
    ParentViewComponent,
    AdminViewComponent,
    NotificationComponent,
    UserManagementViewComponent,
    AddUserPopupComponent,
    UserManagementStudentViewComponent,
    UserManagementTeacherViewComponent,
    UserManagementParentViewComponent,
    UserRowComponent,
    GenericUserContainerComponent,
    ClassManagementViewComponent,
    AddClassPopupComponent,
    ClassDetailsComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MdComponentsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    AuthService,
    BackendService,
    FormBuilder,
    AuthGuard,
    StudentService,
    DatePipe,
    StudentClassService,
    AccountService,
    NoteService,
    NotificationService,
    ParentService,
    TeacherService,
    UserService,
    {provide: MatDialogRef, useValue: dialogMock }
  ],
    
  bootstrap: [AppComponent],
  entryComponents: [StudentPopupComponent, NewGradePopupComponent, NotePopupComponent, NotificationComponent, AddUserPopupComponent, AddClassPopupComponent]
})
export class AppModule { }
