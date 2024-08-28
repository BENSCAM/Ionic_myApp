import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import Etudiant from '../Etudiant';
@Component({
  selector: 'app-page-etudiant',
  templateUrl: './page-etudiant.page.html',
  styleUrls: ['./page-etudiant.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class PageEtudiantPage implements OnInit {
  public static TabEtudiant: Etudiant[] = [];
  matricule: string | null = "";
  nom: string | null = "";
  datenaissance: Date | null = null;
  telephone: number = 0;
  sportif: boolean = false;
  sexe: string | null = "";

  constructor(private route: Router) { }

  ngOnInit() {

  }

  RefreshForm() {
    this.matricule = "";
    this.nom = "";
    this.telephone = 0;
    this.sexe = "";
    this.sportif = false;
    this.datenaissance = null;
  }

  EnregistrerEtudiant() {
    const E = new Etudiant(this.matricule, this.nom, this.datenaissance, this.sexe, this.sportif, this.telephone);
    PageEtudiantPage.TabEtudiant.push(E);
    //this.RefreshForm();
    this.route.navigateByUrl('/list-etudiant');
  }

}
