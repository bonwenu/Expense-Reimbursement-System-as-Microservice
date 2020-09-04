import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/Request';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-requests',
  templateUrl: './create-requests.component.html',
  styleUrls: ['./create-requests.component.css']
})
export class CreateRequestsComponent implements OnInit {

  request: Request = new Request();
  requests = [];

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {

  }

  back() {
    if(sessionStorage.getItem("title") === "Manager") {
      this.router.navigateByUrl("/mHome");
    } 
    else {
      this.router.navigateByUrl("/eHome");
    }
  }

  create(r : Request) {
    r.workerId = Number(sessionStorage.getItem("workerId"));
    r.status ="PENDING";
    r.resolvedBy = "--";
    this.requestService.createRequest(r).subscribe(data => {
      // Push new requests to Newly table
      this.requests.push(data);
    });
    // Clear fields
    this.request.amount = null;
    this.request.description = null;
  }
}
