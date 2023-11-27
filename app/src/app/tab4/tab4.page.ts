import { Component, OnInit } from '@angular/core';
import { ListasService } from '../services/listas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public listaMagias: ListasService, private alertController: AlertController) { }

  circulos:number[] = [0,1,2,3,4,5,6,7,8,9];

  
  ngOnInit() {
  }
  isModalOpen = false;
  
  circuloMagia:number = 0;
  nomeMagia:string = "";
  tempoConjuracao:string = "";
  duracaoMagia:string = "";
  componenteVerbal:boolean = false;
  componenteSomatico:boolean = false;
  componenteMaterial:boolean = false;
  descricaoMagia:string = "";

  limparvariaveis(){
    this.circuloMagia = 0;
    this.nomeMagia = "";
    this.tempoConjuracao = "";
    this.duracaoMagia = "";
    this.componenteVerbal = false;
    this.componenteSomatico = false;
    this.componenteMaterial = false;
    this.descricaoMagia = "";
  }

  async setOpen(isOpen: boolean) {
      if(isOpen == false){
        if(!(this.nomeMagia == ""|| this.tempoConjuracao == ""|| this.duracaoMagia == ""|| !(this.componenteVerbal == false|| this.componenteSomatico == false|| this.componenteMaterial == false)|| this.descricaoMagia == ""))
        { 
          const componentesMagia:string = this.getComponentesMagia(this.componenteVerbal,this.componenteSomatico,this.componenteMaterial);
          const newMagia:any = {name: this.nomeMagia, conjuracao:this.tempoConjuracao, duracao: this.duracaoMagia,componentes:componentesMagia, circulo: this.circuloMagia ,descricao:this.descricaoMagia};
          this.listaMagias.addMagias(newMagia);
          this.limparvariaveis();
        }else{
          const alert = await this.alertController.create({
          header: 'Preecha todos os campos',
          message: 'Algum dos campos não foi preenchido.',
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

  getComponentesMagia(verbal:boolean,somatico:boolean,material:boolean):string{

    if(verbal && somatico && material){
      return "V,S,M";
    }
    if(verbal && somatico && !material){
      return "V,S";
    }
    if(verbal && !somatico && material){
      return "V,M";
    }
    if(verbal && !somatico && !material){
      return "V";
    }
    if(!verbal && somatico && material){
      return "S,M";
    }
    if(!verbal && somatico && !material){
      return "S";
    }
    if(!verbal && !somatico && material){
      return "M";
    }
    if(!verbal && !somatico && !material){
      return "";
    }
    return "null";
  }

  async apagarItem(index:number){
    const alert = await this.alertController.create({
      header: 'Excluir Magia',
      message: 'Deseja mesmo excluir a magia',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => this.listaMagias.delMagias(index)
        }
      ],
      });

      await alert.present();
    
  }
}
