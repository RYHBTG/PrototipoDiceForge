import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {




  constructor() {}


  proficiencia: number = +2;
  for:number = 10;
  des:number = 10;
  con:number = 10;
  int:number = 10;
  sab:number = 10;
  car:number = 10;

  //skills
  Atletismo: boolean = false;
  Acrobacia: boolean = false;
  Prestidigitacao: boolean = false;
  Furtividade: boolean = false;
  Arcanismo: boolean = false;
  Historia: boolean = false;
  Investigacao: boolean = false;
  Natureza: boolean = false;
  Religiao: boolean = false;
  LidarAnimais: boolean = false;
  Intuicao: boolean = false;
  Medicina: boolean = false;
  Percepcao: boolean = false;
  Sobrevivencia: boolean = false;
  Enganacao: boolean = false;
  Intimidacao: boolean = false;
  Performance: boolean = false;
  Persuasao: boolean = false;

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


  modificadorCalc(att:number): string{
    att = Math.floor((att-10)/2);
    if(att >= 0)
      return "+" + att;
    else
      return "" + att;
  }

  skillCheckCalc(att:number,proficiente:boolean): string{
    if(proficiente)
      att = Math.floor((att-10)/2) + this.proficiencia;
    else
      att = Math.floor((att-10)/2);

    if(att >= 0)
      return "+" + att;
    else
      return "" + att;
  }
}


