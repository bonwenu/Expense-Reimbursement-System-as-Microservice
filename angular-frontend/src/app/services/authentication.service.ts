import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Worker } from '../models/Worker'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient, private router:Router) { }

  invalidCredentials:boolean = false;
  private url = "http://localhost:8081/authenticate"
  //private baseUrl = "http://3.18.225.149:8081/authenticate";
  private authToken = "ZXJzX2FkbWluOnBhc3N3b3Jk";


  authenticate(username:string, password:string) { 
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization': 'Basic ' + this.authToken
    });
    return this.http.post<Worker>(this.url,{username: username, passCode: password },{headers: headers}).subscribe((data:Worker) => {
      if(data) {
        let authString = 'Basic ' + this.authToken;
        sessionStorage.setItem('basicauth', authString);
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('title', data.title);
        sessionStorage.setItem('workerId', data.workerId.toString());
        sessionStorage.setItem("loggedAs", "BL Employee");
        this.invalidCredentials = false;
        this.authorize();
      }

      else { 
        this.invalidCredentials = true;
      }
    }); ;
  }

  authorize() { 
    let x = sessionStorage.getItem("title");
    
    
    if (x === "Manager") { 
      this.router.navigateByUrl("/mHome");
    }
    else {
      this.router.navigateByUrl("/eHome");
      }      
    }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null)
  }

  logOut() {
    sessionStorage.clear();
  }
}
