import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/services/worker.service';
import { Worker } from '../../models/Worker';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  worker: Worker;
  profileData: Worker;
  // Check if edit was pushed
  editActive: boolean = false;
  oldData: Worker;
  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    // Gets user profile data;
    this.workerService.getEmployeeById(Number(sessionStorage.getItem("workerId"))).subscribe(data => {
      this.profileData = data;
      console.log("Profile data loaded");
      this.oldData= this.profileData;
    });
  }
  // Edit
  edit() {
    this. editActive = true;
  }

  // Cancel button
  cancel() {
    this. editActive = false;
  }
  
  applyChanges() {
    this. editActive = false;
    this.testForNoChange();
    this.workerService.updateEmployee(this.worker).subscribe((data:Worker) => {
      // Updated information is sent from backend
      this.profileData = data;
      this.oldData = this.profileData;
      // Reset form fields
      this.worker = new Worker();
    });
  }

  testForNoChange() {

    let x = this.oldData;

    if (this.worker.firstName === undefined) {
      this.worker.firstName = x.firstName;
    }
    if (this.worker.lastName === undefined) {
      this.worker.lastName = x.lastName;
    }
    if (this.worker.streetAddress === undefined) {
      this.worker.streetAddress = x.streetAddress;
    }
    if (this.worker.state === undefined) {
      this.worker.state = x.state;
    }
    if (this.worker.city === undefined) {
      this.worker.city = x.city;
    }
    if (this.worker.zip === undefined) {
      this.worker.zip = x.zip;
    }
    if (this.worker.phone === undefined) {
      this.worker.phone = x.phone;
    }
    if (this.worker.email === undefined) {
      this.worker.email = x.email;
    }
    this.worker.workerId = x.workerId;
    this.worker.title = x.title;
    this.worker.username= x.username;
    this.worker.passCode = x.passCode;
    this.worker.hireDate = x.hireDate;
    this.worker.reportsTo = x.reportsTo;
    
  }

}
