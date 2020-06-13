import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adherant',
  templateUrl: './adherant.component.html',
  styleUrls: ['./adherant.component.css']
})
export class AdherantComponent implements OnInit {

 
  constructor( private router: Router){

  }

  ngOnInit(): void {
  }
  
  addAdherant(){
    this.router.navigateByUrl('/addAdherant');
  }
}
