import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specify-employee',
  templateUrl: './specify-employee.component.html',
  styleUrls: ['./specify-employee.component.css']
})
export class SpecifyEmployeeComponent implements OnInit {

  showTable: boolean = false;
  pRequests: object;
  nPRequests: object;
  id:number;

  constructor(private requestService:RequestService, private router: Router) { }

  ngOnInit() {
    let x = sessionStorage.getItem("title");
    
    if (x !== "Manager") { 
      this.router.navigateByUrl("/403");
    }
  }

  getData() {
    this.showTable = true;

   // Make it to button press
    this.requestService.getPendingRequestsById(this.id).subscribe(data => {
      this.pRequests = data;
      //console.log(this.pRequests);
      console.log("Specified employee pending requests have been loaded");
    });
    this.requestService.getNonPendingRequestsById(this.id).subscribe(data => {
      this.nPRequests = data;
      //console.log(this.nPRequests);
      console.log("Specified employee non-pending requests have been loaded");
    });

  }
  back() {
    if(sessionStorage.getItem("title") === "Manager") {
      this.router.navigateByUrl("/mHome");
    } 
    else {
      this.router.navigateByUrl("/eHome");
    }
  }

}
