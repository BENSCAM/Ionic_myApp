import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink,Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ConfirmationEtudiantPage } from '../confirmation-etudiant/confirmation-etudiant.page';
import Etudiant from '../Etudiant';
import { PageEtudiantPage } from '../page-etudiant/page-etudiant.page';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.page.html',
  styleUrls: ['./list-etudiant.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class ListEtudiantPage implements OnInit {
  TousLesEtudiants: Etudiant[]=[];
  constructor() { }

  ngOnInit() {
    this.TousLesEtudiants=PageEtudiantPage.TabEtudiant;
    console.log(this.TousLesEtudiants);
  }

}


