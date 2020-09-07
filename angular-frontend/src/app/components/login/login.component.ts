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
    
  }

  ngAfterViewInit() {
  }

  checkLogin() {
    let valid = false;

    this.loginservice.authenticate2(this.username, this.password).subscribe((data:Worker) => {
      if(data) {
        let authString = 'Basic ' + btoa('ers_admin:password');
        sessionStorage.setItem('basicauth', authString);
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('title', data.title);
        sessionStorage.setItem('workerId', data.workerId.toString());
        sessionStorage.setItem("loggedAs", "BL Employee");
        valid = true;
        this.authorize();
      }

      else {
        this.invalidCredentials = true;
      }
    });
  }
  
  authorize() { 
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

