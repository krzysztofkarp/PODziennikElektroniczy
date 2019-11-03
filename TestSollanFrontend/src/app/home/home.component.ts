import { AccountService } from './../account/account-view/account-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Consts } from '../general/utils/Consts';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NotificationService } from '../notification/notification.service';

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
    private authService: AuthService,
    private accountService: AccountService,
    private notificationService: NotificationService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      password: ['', Validators.required],
      login: ['', Validators.required]
    })
  }



  ngOnInit() {
    this.checkIfLoggedIn();
  }


  onLogin(fg: FormGroup) {
    let login: any = fg[Consts.FormFields.LOGIN];
    let pass: any = fg[Consts.FormFields.PASSWORD];
    this.authService.login(login, pass).subscribe(resp => {
      if(resp.ok && resp.item){
        this.accountService.store(resp.item);
        localStorage.setItem(Consts.StorageKey.USER, JSON.stringify(resp.item));
        this.router.navigate([Consts.RouterPaths.ACCOUNT, resp.item.id])
      } else {
        this.notificationService.showError(Consts.Messages.WRONG_CREDENTIALS);
        this.form.reset();
      }
    })
  }

  checkIfLoggedIn(){
    let id = localStorage.getItem(Consts.StorageKey.USER);
    if(id){
      this.router.navigate([Consts.RouterPaths.ACCOUNT, id])
    }
  }

  
}
