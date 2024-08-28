import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GestEtudiantPage } from '../gest-etudiant/gest-etudiant.page';
@Component({
  selector: 'app-list-garcon',
  templateUrl: './list-garcon.page.html',
  styleUrls: ['./list-garcon.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,GestEtudiantPage]
})
export class ListGarconPage implements OnInit {

  constructor() { 
    GestEtudiantPage.call
  }

  ngOnInit() {
  }

}
