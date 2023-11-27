import { Component } from '@angular/core';
import { ListasService } from '../services/listas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  constructor(public listEquipamentos:ListasService,protected alertController:AlertController) {}

  nome: string = '';
  alcance: string = '';
  dano: string = '';
  proproedades: string = '';

  isModalOpen:boolean = false;

  async setOpen(isOpen: boolean) {
    if(isOpen == false){
      if(!(this.nome == '' || this.alcance == '' || this.dano == '' || this.proproedades == ''))
      { 
        const newEquipamento:any = {name: this.nome, alcance:this.alcance, dano: this.dano, proproedades:this.proproedades};
        this.listEquipamentos.addEquipamentos(newEquipamento);
        this.limparvariaveis();
      }else{
        const alert = await this.alertController.create({
        header: 'Preecha todos os campos',
        message: 'Algum campo não foi preenchido.',
        buttons: ['Ok'],
        });
  
        await alert.present();
        return;
      }
    }
  this.isModalOpen = isOpen;
  
}

cancel(isOpen: boolean){
  this.limparvariaveis();

  this.isModalOpen = isOpen;
}




  async apagarItem(index:number){
    const alert = await this.alertController.create({
      header: 'Excluir Equipamento',
      message: 'Deseja mesmo excluir o equipamento',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => this.listEquipamentos.delEquipamentos(index)
        }
      ],
      });

      await alert.present();
    
  }
  limparvariaveis(){
    this.nome = ' ';
    this.alcance = '';
    this.dano = '';
    this.proproedades = '';
  }
  onWillDismiss(event: Event) {
    this.limparvariaveis();
    this.isModalOpen = false;
  }
}
