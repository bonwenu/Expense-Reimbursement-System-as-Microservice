import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-e-processed-requests',
  templateUrl: './e-processed-requests.component.html',
  styleUrls: ['./e-processed-requests.component.css']
})
export class EProcessedRequestsComponent implements OnInit {

  requests:Object;
  constructor(private router: Router, private requestService: RequestService) { }

  ngOnInit() {
   
    this.requestService.getNonPendingRequestsById(Number(sessionStorage.getItem("workerId"))).subscribe(data => {
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
