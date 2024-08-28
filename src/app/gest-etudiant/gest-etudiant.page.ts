import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gest-etudiant',
  templateUrl: './gest-etudiant.page.html',
  styleUrls: ['./gest-etudiant.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class GestEtudiantPage implements OnInit {

  Nom: string = "";
  sexe: string = "";
  TabEtudiant: Etudiant[] = [];
  TabFeminin: Etudiant[] = [];
  TabMasculin: Etudiant[] = [];
  constructor() { }

  ngOnInit() {
  }

  EnregistrerEtudiant() {
    let E;
    E = new Etudiant(this.Nom, this.sexe);
    this.TabEtudiant.push(E);
    this.Nom = "";
    this.sexe = "";
    
  }

  Feminin(E: Etudiant) {
    let index = -1;
    for (let NEtudiant of this.TabEtudiant) {
      
      index++;
      if (E.Sexe === "F") {
        this.TabFeminin.push(NEtudiant);
        this.TabEtudiant.splice(index, 1);
        break;
      }
    }
  }

  Masculin(E: Etudiant) {
    let index = -1;
    for (let NEtudiant of this.TabEtudiant) {
      index++;
      if (E.Sexe === "M") {
        this.TabMasculin.push(NEtudiant);
        this.TabEtudiant.splice(index, 1);
        break;
      }
    }

  }

}

class Etudiant {
  public IdEtudiant: number;
  public Nom: string;
  public Sexe: string;
  static numero = 1;

  constructor(nom: string, Sexe: string) {
    this.IdEtudiant = Etudiant.numero++;
    this.Nom = nom;
    this.Sexe = Sexe;
  }

}

