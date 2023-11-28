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

async getmagia(key:string) {
  const ret:any = await Preferences.get({ key: key });
  this.listmagias = JSON.parse(ret.value);
  if(this.listmagias == null)
    this.setObject([],'magias'+this.id);
}


async getEquipamento(key:string) {
  const ret:any = await Preferences.get({ key: key });
  this.listEquipamentos = JSON.parse(ret.value);
  if(this.listEquipamentos == null)
    this.setObject([],'Equipamentos'+this.id);
}

async getHabilidade(key:string) {
  const ret:any = await Preferences.get({ key: key });
  this.listHabilidades = JSON.parse(ret.value);
  if(this.listHabilidades == null)
    this.setObject([],'Habilidades'+this.id);
}
async getliststatu(key:string) {
  const ret:any = await Preferences.get({ key: key });
  this.listHabilidades = JSON.parse(ret.value);
  if(this.listHabilidades == null)
    this.setObject([],'liststatus'+this.id);
}

  id:number = 0;

  constructor() {
    this.getmagia('magias'+this.id);
    this.getEquipamento('Equipamentos'+this.id);
    this.getHabilidade('Habilidades'+this.id);
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


//controle Equipamentos
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

  //controle Habilidades
  public getHabilidades():any[]{
    return this.listHabilidades;
  }
  public addHabilidades(novoHabilidades:any[]){
    this.listHabilidades.push(novoHabilidades) ;
    this.setObject(this.listHabilidades,'Habilidades'+this.id);
  }
   public delHabilidades(indice:number){
    this.listHabilidades.splice(indice,1);
    this.setObject(this.listHabilidades,'Habilidades'+this.id);
  }

}
