import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {AfterViewInit} from '@angular/core';   
import { WorkerService } from 'src/app/services/worker.service';
import { Worker } from '../../models/Worker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit  {

  username:string = '';
  password:string = '';
  invalidLogin:boolean = false;
  invalidCredentials:boolean = false;
  users:Worker[];
  worker : Worker;
  title: string;
  id: number;

  constructor(private router: Router,
    private loginservice: AuthenticationService,
    private workerService: WorkerService) { }

  ngOnInit() {
    sessionStorage.setItem("loggedAs", "BL Employee")
    
    let x = sessionStorage.getItem("loggedAs");
        
    if (x === "BL Employee") { 
      this.router.navigateByUrl("/mHome")

    }
    
    this.workerService.getAllEmployees().subscribe(data => {
      this.users = data;

    });
    
  }

  ngAfterViewInit() {
    console.log(sessionStorage.getItem('username') + " is currenyly logged in");
    console.log("Title: " +sessionStorage.getItem('title'));
}

  checkLogin() {

    let valid = false;

    for(let i = 0; i < this.users.length; i++) {
      if (this.username === this.users[i].username && this.password === this.users[i].passCode) {
        this.worker = this.users[i];
        this.title = this.worker.title;
        this.id = this.worker.workerId;
        valid = true;
        break;
      }

    }
    if (valid) {
      this.authorize();
      return;
    }
    this.invalidCredentials = true;
  }
  authorize() {
    this.loginservice.authenticate(this.username, this.title, this.id) 
    let x = sessionStorage.getItem("title");
    
    if (x === "Manager") { 
      this.router.navigateByUrl("/mHome")
      this.invalidLogin = false
    }
    else {
      this.router.navigateByUrl("/eHome")
      this.invalidLogin = false
      } 
      
    }
    
  }

