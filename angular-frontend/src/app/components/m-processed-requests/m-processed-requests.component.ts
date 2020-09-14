import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-processed-requests',
  templateUrl: './m-processed-requests.component.html',
  styleUrls: ['./m-processed-requests.component.css']
})
export class MProcessedRequestsComponent implements OnInit {
  
  requests: object;

  constructor(private requestService:RequestService, private router:Router) { }

  ngOnInit() {

    let x = sessionStorage.getItem("title");
    
    if (x !== "Manager") { 
      this.router.navigateByUrl("/403");
    }

    this.requestService.getAllNonPendingRequests().subscribe(data => {
      this.requests = data;
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
