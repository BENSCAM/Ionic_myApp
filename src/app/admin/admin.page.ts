import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminPage implements OnInit {
  name: string|null="";
  profession: string|null="";
  solde:number=0; 
  telephone:string|null="";

  constructor(private router:Router) { }

  ngOnInit() {
    const routerState=this.router.getCurrentNavigation()?.extras.state;
    if(routerState){
      console.log(routerState);
      this.name=routerState['nom'];
      this.telephone=routerState['telephone'];
      this.solde=routerState['solde'];
    }
    const hey=this.router.getCurrentNavigation()?.extras.queryParams;
    if(hey){
      console.log(hey);
      this.name=hey['nom'];
      this.telephone=hey['telephone'];
      this.solde=hey['solde'];
    }
  }

}
