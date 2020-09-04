import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
    let x = sessionStorage.getItem("title");
        
    if (x !== "Manager") { 
      this.router.navigateByUrl("/eHome")
    }
  }
}
