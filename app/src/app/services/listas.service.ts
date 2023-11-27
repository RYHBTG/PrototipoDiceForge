import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';





@Injectable({
  providedIn: 'root'
})
export class ListasService {



// JSON "set" example
async setObject(info:any) {
  await Preferences.set({
    key: 'user',
    value: JSON.stringify(info)
  });
}
private listmagias:any = [];

async getObject() {
  const ret:any = await Preferences.get({ key: 'user' });
  this.listmagias = JSON.parse(ret.value);
}
  
  constructor() { this.getObject()  }
  

  public getMagias():any[]{
    return this.listmagias;
  }
  public addMagias(novaMagia:any[]){
    this.listmagias.push(novaMagia) ;
    this.setObject(this.listmagias);
  }
  delMagias(indice:number){
    this.listmagias.splice(indice,1);
    this.setObject(this.listmagias);
  }
}
