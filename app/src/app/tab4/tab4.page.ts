import { Component, OnInit } from '@angular/core';
import { ListasService } from '../services/listas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public listaMagias: ListasService, public alertController: AlertController) { }

  circulos:number[] = [0,1,2,3,4,5,6,7,8,9];


  ngOnInit() {
  }
  isModalOpen = false;
  
  nomeMagia:string = "";
  tempoConjuracao:string = "";
  duracaoMagia:string = "";
  componenteVerbal:boolean = false;
  componenteSomatico:boolean = false;
  componenteMaterial:boolean = false;
  descricaoMagia:string = "";


  setOpen(isOpen: boolean) {
    if(isOpen == false){
      
    }

    this.isModalOpen = isOpen;
  }

}
