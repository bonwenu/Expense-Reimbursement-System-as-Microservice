import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
    let x = sessionStorage.getItem("title");
    
    if (x === "Manager") { 
      this.router.navigateByUrl("/mHome");
    }
    
    } 


}
  


