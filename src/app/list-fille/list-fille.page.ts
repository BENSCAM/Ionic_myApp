import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GestEtudiantPage } from '../gest-etudiant/gest-etudiant.page';

@Component({
  selector: 'app-list-fille',
  templateUrl: './list-fille.page.html',
  styleUrls: ['./list-fille.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,GestEtudiantPage]
})
export class ListFillePage implements OnInit {

  constructor() { 
    console.table(GestEtudiantPage.prototype.TabFeminin)
  }

  ngOnInit() {
  }

}
