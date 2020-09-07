import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';;
import { Request } from '../../models/Request';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-m-pending-requests',
  templateUrl: './m-pending-requests.component.html',
  styleUrls: ['./m-pending-requests.component.css']
})
export class MPendingRequestsComponent implements OnInit {

  requests: Request[];
  employeeName: any;
  

  constructor(private workerService: WorkerService, private requestService:RequestService, private router:Router) { }

  ngOnInit() {
    // No access if not a manager
    let x = sessionStorage.getItem("title");
    
    if (x !== "Manager") { 
      this.router.navigateByUrl("/403");
    }
    this.requestService.getAllPendingRequests().subscribe((data:Request[]) => {
      this.requests = data;
      
      console.log("Pending requests have been loaded");

    });
    let id = Number(sessionStorage.getItem("workerId"))
    this.workerService.getEmployeeNameById(id).subscribe(data => {
      this.employeeName = data;
      sessionStorage.setItem("name", data);
    });

  }

  approve(r:Request) {
    r.resolvedBy = sessionStorage.getItem("name");
    r.status = "APPROVED"
    this.requestService.updateRequest(r).subscribe((data:Request[]) => {
      this.requests = data;
      console.log("Request approved");
    });
    
  }

  deny(r:Request) {
    r.resolvedBy = sessionStorage.getItem("name");
    r.status = "DENIED"
    this.requestService.updateRequest(r).subscribe((data:Request[]) => {
      this.requests = data;
      console.log("Request denied");
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
