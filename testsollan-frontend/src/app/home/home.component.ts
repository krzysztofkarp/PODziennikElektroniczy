import { Observable } from 'rxjs/Rx';
import { HomeService } from './home.service';
import { Consts } from '../general/utils/Consts';
import { BackendService } from '../general/backend/backend.service';
import { homePath, questionPath } from './../utils/constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  checker: boolean;
  constructor(private router: Router, private homeService: HomeService) {

  }

  ngOnInit() {
    localStorage.clear();
  }

  //*** Working Redirecting (Commented, because it disrupts workflow)

  // ngDoCheck(){
  //   if (sessionStorage.getItem('wasStarted') == 'yes') {
  //     if (this.homeService.getWasStarted()) {
  //       this.router.navigate([questionPath, 1]);
  //     } else {
  //       this.router.navigate([homePath]);
  //       sessionStorage.clear();        
  //     }
  //   } else {
  //   }
  // }
  start() {
    this.router.navigate([questionPath, 1]);
    localStorage.setItem('currentQuestionId', '1');
    
    // sessionStorage.setItem('wasStarted', 'yes');
  }



}
