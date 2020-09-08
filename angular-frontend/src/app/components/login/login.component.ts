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

    this.loginservice.authenticate(this.username, this.password);
  }
  
  
    
  }

