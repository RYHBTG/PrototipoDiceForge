import { ListasService } from './../services/listas.service';
import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {




  constructor(public statusService:ListasService,private alertController: AlertController) {}

  vidaMaxima: number = 10;
  vidaAtual: number = 9;

  velocidade:number = 9;
  armadura:number = 19;

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


  modificadorCalc(att:number): number{
   return Math.floor((att-10)/2);
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
  skillCheckCalcNum(att:number,proficiente:boolean): number{
    if(proficiente)
      att = Math.floor((att-10)/2) + this.proficiencia;
    else
      att = Math.floor((att-10)/2);
    return att;
  }

  getiniciativa():string{
    return this.skillCheckCalc(this.des,false);
  }
  getvelocidade():string{
    return  this.velocidade + "m";
  }

  takeDamagem(damage:number){
    if(!((this.vidaAtual) <= 0))
      this.vidaAtual-=damage;

  }
  healDamage(heal:number){
    if(!((this.vidaAtual) == this.vidaMaxima))
      this.vidaAtual+=heal;

  }
   rollDice(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async rolarPericia(atributo:number, pericia:boolean, name:string) {
    let rolagem:number = this.rollDice(1,20);
    let res:number = rolagem + this.skillCheckCalcNum(atributo,pericia)
    const alert = await this.alertController.create({
      header: name ,
      subHeader:'(1d20 + ' + this.skillCheckCalcNum(atributo,pericia) + ') → ' + rolagem.toString() + " + " + this.skillCheckCalcNum(atributo,pericia).toString(),
      message:  res.toString(),
      buttons: ['OK'],
    });

    await alert.present();
  }
}


