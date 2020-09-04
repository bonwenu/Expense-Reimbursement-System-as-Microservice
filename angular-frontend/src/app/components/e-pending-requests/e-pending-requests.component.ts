import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { Request } from '../../models/Request'

@Component({
  selector: 'app-e-pending-requests',
  templateUrl: './e-pending-requests.component.html',
  styleUrls: ['./e-pending-requests.component.css']
})
export class EPendingRequestsComponent implements OnInit {

  requests: Request[];

  constructor(private router: Router, private requestService: RequestService) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("workerId"));
    this.requestService.getPendingRequestsById(Number(sessionStorage.getItem("workerId"))).subscribe((data:Request[]) => {
      this.requests = data;
      console.log(this.requests);
      console.log("Pending requests have been loaded");
    
  });
    
}

  back() {
    if(sessionStorage.getItem("title") === "Manager") {
      this.router.navigateByUrl("mHome");
    } 
    else {
      this.router.navigateByUrl("eHome");
    }
  }

}
