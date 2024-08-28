import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink,Route,Router, ActivatedRoute } from '@angular/router';
import Etudiant from '../Etudiant';
import { PageEtudiantPage } from '../page-etudiant/page-etudiant.page';

@Component({
  selector: 'app-page-list-etudiant',
  templateUrl: './page-list-etudiant.page.html',
  styleUrls: ['./page-list-etudiant.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class PageListEtudiantPage implements OnInit {
TouslesEtudiants: Etudiant[]=[];
matricule: string|null="";
nom: string|null="";
datenaissance: Date|null=null;
telephone: number=0;
sportif: string|null="";
sexe: string|null="";
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    const id:string|null= this.route.snapshot.paramMap.get('id');
    console.log(id);
    let idEtudiant=Number(id);
    this.TouslesEtudiants=PageEtudiantPage.TabEtudiant
    for(let e of this.TouslesEtudiants){
      if(e.id===idEtudiant){
        this.datenaissance=e.datenaissance;
        this.matricule=e.matricule;
        this.nom=e.nom;
        this.sexe=e.sexe;
        if(e.sportif===true){
          this.sportif="sportif";
        } else{
          this.sportif="Non sportif";
        }
        this.telephone=e.telephone;
      }
    }
  }

}
