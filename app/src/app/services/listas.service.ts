import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';





@Injectable({
  providedIn: 'root'
})
export class ListasService {

private listmagias:any = [];
private listHabilidades:any = [];
private listEquipamentos:any = [];



// JSON "set" example
async setObject(info:any,key:string) {
  await Preferences.set({
    key: key,
    value: JSON.stringify(info)
  });
}
async getmagias(key:string) {
  const ret:any = await Preferences.get({ key: key });
  this.listmagias = JSON.parse(ret.value);
  if(this.listmagias == null)
    this.setObject([],'magias'+this.id);
}


async getEquipamento(key:string) {
  const ret:any = await Preferences.get({ key: key });
  this.listEquipamentos = JSON.parse(ret.value);
  if(this.listEquipamentos == null)
    this.setObject([],'magias'+this.id);
}
  
  id:number = 0;

  constructor() { 
    this.getmagias('magias'+this.id);
    this.getEquipamento('Equipamentos'+this.id);
  }
  
  //controle Magias
  public getMagias():any[]{
    return this.listmagias;
  }
  public addMagias(novaMagia:any[]){
    this.listmagias.push(novaMagia) ; 
    this.setObject(this.listmagias,'magias'+this.id);
  }
  public delMagias(indice:number){
    this.listmagias.splice(indice,1);
    this.setObject(this.listmagias,'magias'+this.id);
  }


//controle Habilidades
  public getEquipamentos():any[]{
    return this.listEquipamentos;
  }
  public addEquipamentos(novoEquipamentos:any[]){
    this.listEquipamentos.push(novoEquipamentos) ;
    this.setObject(this.listEquipamentos,'Equipamentos'+this.id);
  }
   public delEquipamentos(indice:number){
    this.listEquipamentos.splice(indice,1);
    this.setObject(this.listEquipamentos,'Equipamentos'+this.id);
  }
}
