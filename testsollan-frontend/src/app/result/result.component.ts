import { ResultholderService } from './resultholder.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private holder: ResultholderService) { }

  points: any;
  answers: any[];

  ngOnInit() {
   
      this.points = this.holder.points;
      this.answers = this.holder.answers;
    
       
      }
        
        
    
  }


