import { AccountService } from './../account/account-view/account-service';
import { StudentService } from './../students/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { Consts } from '../general/utils/Consts';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checker: boolean;
  form: FormGroup;
  invalidPassword: boolean;
  currentQuestionId;
  login: string;
  password: string;

  constructor(
    private router: Router,
    private studentService: StudentService,
    private homeService: HomeService,
    private accountService: AccountService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      password: ['', Validators.required],
      login: ['', Validators.required]
    })
  }



  ngOnInit() {
    this.checkIfLoggedIn();
  }


  ngDoCheck() {
  
  }

  onLogin(fg) {
    let login: any = fg["login"];
    let pass: any = fg["password"];
    this.homeService.login(login, pass).subscribe(resp => {
      if(resp.ok && resp.item){
        this.accountService.store(resp.item);
        localStorage.setItem("user", JSON.stringify(resp.item));
        this.router.navigate(["/account", resp.item.id])
      } else {
        alert("Wrong credentials");
      }
    })
  }

  checkIfLoggedIn(){
    let id = localStorage.getItem("user");
    if(id){
      this.router.navigate(["/account", id])
    }
  }

  
}
