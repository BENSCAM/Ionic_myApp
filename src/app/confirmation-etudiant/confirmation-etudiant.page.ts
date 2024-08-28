import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-confirmation-etudiant',
  templateUrl: './confirmation-etudiant.page.html',
  styleUrls: ['./confirmation-etudiant.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfirmationEtudiantPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const etudiant = this.route.snapshot.paramMap.get("id")
    if (etudiant)
      console.log(etudiant);

    //this.marque=this.routerstate["marque"]
    //console.log(marque);  
  }
}

