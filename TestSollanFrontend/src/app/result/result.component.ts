import { Consts } from './../general/utils/Consts';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  points;
  name;
  answers;
  questionId;

  ngOnInit() {


    
  }
}





