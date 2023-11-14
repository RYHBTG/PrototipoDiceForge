import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  
  
  constructor() {}

  for:number = 10;
  des:number = 10;
  con:number = 10;
  int:number = 10;
  sab:number = 10;
  car:number = 10;


  setfor(newfor:any){
    this.for = newfor.target!.value;
  }
  setdes(newdes:any){
    this.des = newdes.target!.value;
  }
  setcon(newcon:any){
    this.con = newcon.target!.value;
  }
  setint(newint:any){
    this.int = newint.target!.value;
  }
  setsab(newsab:any){
    this.sab = newsab.target!.value;
  }
  setcar(newfor:any){
    this.car = newfor.target!.value;
  }


  modificadorCalc(att:number): number{
    return Math.floor((att-10)/2);
  }
}
