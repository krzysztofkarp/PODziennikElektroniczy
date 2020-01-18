import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'communiaction-view',
  templateUrl: './communiaction-view.component.html',
  styleUrls: ['./communiaction-view.component.css']
})
export class CommuniactionViewComponent implements OnInit {


  tabIndex: number =0;

  constructor() { }

  ngOnInit() {
  }

  tabChange(evt: MatTabChangeEvent){
    this.tabIndex = evt.index;
  }

}
