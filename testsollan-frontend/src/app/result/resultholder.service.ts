import { Injectable } from '@angular/core';

@Injectable()
export class ResultholderService {

  result;
  private _answers: any[];
  private _points: any;
  
  constructor() { }

  holdResult(result){
    this._answers = result.results;
    this._points = result.points;
    localStorage.setItem('final', JSON.stringify(this._answers));
  }

  get answers(){
    return this._answers;
  }

  get points(){
    return this._points;
  }

}
