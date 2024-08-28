import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.page.html',
  styleUrls: ['./enquete.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgFor]
})
export class EnquetePage implements OnInit {
  noms: Pays[] = [];
  enregPays: string = "";
  popul:number=0;

  constructor() {}

  ngOnInit() {
    this.noms.push(new Pays("France", 40000000));
    this.noms.push(new Pays("Angleterre", 35000000));
  }

  supprimerPays(p: Pays) {
    let index = -1;
    for (let iterPays of this.noms) {
      index++;
      if(p.id === iterPays.id) {
        this.noms.splice(index, 1);
        break;
      }
    }
  }

  enreg() {
    let p;
    p = new Pays(this.enregPays, this.popul);
    this.noms.push(p);
    this.enregPays = "";
    this.popul = 0;
  }
}
class Pays {

  public Nompay: string;
  public Popu: number;
  public id: number;
  static numero = 1; 

  constructor(Nompays: string, Population: number) {
    this.Nompay = Nompays;
    this.Popu = Population;
    this.id = Pays.numero++;
  }
}
