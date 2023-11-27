import { Component } from '@angular/core';
import { ListasService } from '../services/listas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nomeHabilidade:string = '';
  tipoHabilidade:string = '';
  recargaHabilidade:string = '';
  isModalOpen:boolean = false;
  constructor(public listHabilidade:ListasService,protected alertController:AlertController) {}
  async setOpen(isOpen: boolean) {
    if(isOpen == false){
      if(!(this.nomeHabilidade == '' ||  this.tipoHabilidade == '' || this.recargaHabilidade == ''))
      { 
        const newabilidade:any = {};
        this.listHabilidade.addHabilidades(newabilidade);
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
      header: 'Excluir abilidade',
      message: 'Deseja mesmo excluir o abilidade',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => this.listHabilidade.delHabilidades(index)
        }
      ],
      });

      await alert.present();
    
  }
  limparvariaveis(){

  }
  onWillDismiss(event: Event) {
    this.limparvariaveis();
    this.isModalOpen = false;
  }
}
