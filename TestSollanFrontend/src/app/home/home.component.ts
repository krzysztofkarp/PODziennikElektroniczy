import { AccountService } from './../account/account-view/account-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Consts } from '../general/utils/Consts';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NotificationService } from '../notification/notification.service';
import { Response } from '../general/backend/response';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checker: boolean;
  form: FormGroup;
  invalidPassword: boolean;
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

  }


  onLogin(fg: FormGroup) {
    let login: any = fg[Consts.FormFields.LOGIN].trim();
    let pass: any = fg[Consts.FormFields.PASSWORD];
    this.authService.login(login, pass).subscribe(resp => {
      if(Response.isOk(resp) && resp.item){
        this.accountService.store(resp.item.user);
        localStorage.setItem(Consts.StorageKey.USER, JSON.stringify(resp.item.user));
        localStorage.setItem(Consts.StorageKey.AUTH_TOKEN, resp.item.token);
        this.router.navigate([Consts.RouterPaths.ACCOUNT, resp.item.user.type, resp.item.user.id])
      } else {
        this.notificationService.showError(Consts.Messages.WRONG_CREDENTIALS);
        this.form.reset();
      }
    })
  }


  
}
