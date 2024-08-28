import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactPage } from '../contact/contact.page';
import { EnregistrementPage } from '../enregistrement/enregistrement.page';
import { Router } from '@angular/router';
import Contact from '../Contact';
@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.page.html',
  styleUrls: ['./list-contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListContactPage implements OnInit {
  contacts: Contact[]=[];
  constructor( private route:Router) { 
    
  }

  ngOnInit() {
    this.contacts=EnregistrementPage.Listdecontact;
    console.log(this.contacts);
  }

}
