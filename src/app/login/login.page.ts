import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router,RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class LoginPage implements OnInit {

  Username: string = "";
  Password: string = "";
  messageErreur: string = "";
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginVerification() {
    if (this.Username === "admin" && this.Password === "admin") {
      this.router.navigateByUrl('/admin');
    }else if (this.Username === "user" && this.Password === "user") {
      this.router.navigateByUrl('/user');
    }
    else{
      this.messageErreur="Element de connexion incorrect!";
    }
  }

  loginVerificationWithState(){
    if (this.Username === "admin" && this.Password === "admin") {
      const param : NavigationExtras ={
        state:{
          nom :'ABAH BENOIT',
          telephone :'691722215',
          solde : 250000000
        },
      };
      this.router.navigateByUrl('/admin',param);
    }else if (this.Username === "user" && this.Password === "user") {
      const param : NavigationExtras ={
        state:{
          nom :'BenoitHarck',
          telephone :'690722319',
          solde : 250000
        },
      };
      this.router.navigateByUrl('/user',param);
    }
    else{
      this.messageErreur="Element de connexion incorrect!";
    }
  }

  loginVerificationWithquery(){
    if (this.Username === "admin" && this.Password === "admin") {
      const param : NavigationExtras ={
        queryParams:{
          nom :'ABAH BENOIT',
          telephone :'691722215',
          solde : 250000000
        },
      };
      this.router.navigateByUrl('/admin',param);
    }else if (this.Username === "user" && this.Password === "user") {
      const param : NavigationExtras ={
        queryParams:{
          nom :'BenoitHarck',
          telephone :'690722319',
          solde : 250000
        },
      };
      this.router.navigateByUrl('/user',param);
    }
    else{
      this.messageErreur="Element de connexion incorrect!";
    }

  }

}
