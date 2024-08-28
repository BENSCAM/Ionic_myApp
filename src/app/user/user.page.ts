import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router,Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage implements OnInit {
  name: string|null="";
  profession: string|null="";
  solde:number=0;
  telephone:number=0;
  nom: string|null="";
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    const routerState=this.router.getCurrentNavigation()?.extras.state;
    this.nom= this.route.snapshot.queryParamMap.get('name');
    this.profession= this.route.snapshot.queryParamMap.get("profession");
    
    if(routerState){
      console.log(routerState);
      this.name=routerState['nom'];
      this.telephone=routerState['telephone'];
      this.solde=routerState['solde'];
    }

    const id:string|null= this.route.snapshot.paramMap.get('id');
    if(id){
      console.log(id);
    }
  }

}
