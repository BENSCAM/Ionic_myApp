import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class ContactPage implements OnInit {
  controleecran: boolean = true;
  control: string = "";
  Display: any | null = "";

  public static PhoneNumber:number|null=0;

  public alertButtons = ['Enregistrer'];
  public alertInputs = [
    {
      placeholder: 'Votre nom',
    },
    {
      value: this.Display,
    },
  ];

  constructor( private router: Router) { }

  ngOnInit() { }
  click(element: any) {
    if (Number.isInteger(element)) {
      this.handleNumber(element);

    }
    if (this.Display !== "")
      this.control = "y";

  }

  handleNumber(element: number) {
    if (this.controleecran) {
      this.Display = element;
      this.controleecran = false;
    } else {
      this.Display = this.Display + '' + element;

    }

  }

  Enregistrement() {
    ContactPage.PhoneNumber=this.Display;
    this.router.navigateByUrl('/enregistrement');
  }

  Appeler(){}
  Effacer() {
    this.Display = this.Display.slice(0, -1)
    this.alertInputs[1].value = this.Display;
    if (this.Display == "") {
      this.control = "";
    }

  }
}
