import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.page.html',
  styleUrls: ['./calculatrice.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalculatricePage implements OnInit {

  display:any = 0;
  effaceEcran: boolean = true;
  operande: any;
  operationEnCour: any;
  traitement: boolean = false;

  click(element: any){
    if(Number.isInteger(element)){
      this.handleNumber(element);
    }
    else{
        this.handleOperation(element);
    }
  }

  handleNumber(element: number){
      if(element !== 0){
        if(this.effaceEcran === true){
          this.display = element;
          this.effaceEcran = false;
        }
        else{
          this.display = this.display +''+ element;
        }
      }
      else{
        if(this.effaceEcran === false){
          this.display = this.display +''+ element;
        }
        if(this.effaceEcran && this.display !== 0){
          this.display = element;
        }
      }
  }

  handleOperation(element: string){

      if(element === ','){
        let s:string = this.display.toString();
        if(s.indexOf(',') === -1){
          this.display = this.display + '.' ;
          this.effaceEcran = false;
        }
      }

      if(element === '+' || element === '-' || element === 'X' || element === '/' ){
        if(this.traitement){
          this.handleEgale();
        }
        this.effaceEcran = true;
        this.operande = this.display;
        this.operationEnCour = element;
        this.traitement = true;
      }

      if(element === '='){
         this.handleEgale();
         this.traitement = false;
         this.operationEnCour = '';
      }
  }

  handleEgale(){
    if(this.operationEnCour === '+'){
      this.display = Number(this.operande) + Number(this.display);
    }
    else if(this.operationEnCour === '-'){
      this.display = Number(this.operande) - Number(this.display);
    }
    else if(this.operationEnCour === 'X'){
      this.display = Number(this.operande) * Number(this.display);
    }
    else if(this.operationEnCour === '/'){
      this.display = Number(this.operande) / Number(this.display);
    }
    this.effaceEcran = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
