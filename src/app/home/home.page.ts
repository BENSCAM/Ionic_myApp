import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonInput,IonRadioGroup,IonRadio,IonLabel,IonItem} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonInput,FormsModule,IonRadioGroup,IonRadio,IonLabel,IonItem,NgIf],
})
export class HomePage {
  choix: any;
  equipe:any;
  serie:any;
  desactiver:boolean=true;
  message:string='Je suis BenoitHarck';

  constructor() {}

  gestionClick(){
    this.message="Salut";
  }

  Test():boolean{

    if(this.message.toLowerCase()==="bonjour"){
      return false;
    }else{
      return true;
    }
  }
  selectchoix():boolean{
    if(this.choix==="Feminin"){
      return true;
    }else{
      return false;
    }
    
  }

  enregistrer():void{
    if(this.choix==="Feminin"){
      console.log("Madame a pour serie prefere: "+ this.serie);
    }else{
      console.log("Monsieur a pour equipe prefere: "+ this.equipe);
    }
  }
    


}
