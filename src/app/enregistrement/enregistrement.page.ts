import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactPage } from '../contact/contact.page';
import { Router } from '@angular/router';
import Contact from '../Contact';
@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.page.html',
  styleUrls: ['./enregistrement.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EnregistrementPage implements OnInit {
  public static Listdecontact: Contact[]=[];
  Nom:string |null="";
  Prenom: string|null="";
 
  NumeroPhone: number|null=0;

  constructor(private router:Router) { 
    
  }
  Enregistrer(){
    let C;
    C=new Contact(this.Nom,this.Prenom,this.NumeroPhone);
    EnregistrementPage.Listdecontact.push(C);
    this.router.navigateByUrl('/list-contact');
    console.log(EnregistrementPage.Listdecontact);
  }

  ngOnInit() {
    this.NumeroPhone=ContactPage.PhoneNumber;
    console.log(this.NumeroPhone);
  }

}

