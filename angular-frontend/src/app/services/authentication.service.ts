import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Worker } from '../models/Worker'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  private url = "http://localhost:8081/authenticate"
  //private baseUrl = "http://3.18.225.149:8081/authenticate";
  private authToken = "ZXJzX2FkbWluOnBhc3N3b3Jk";


  authenticate2(username:string, password:string) { 
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization': 'Basic ' + this.authToken
    });
    return this.http.post<Worker>(this.url,{username: username, passCode: password },{headers: headers} ) ;
  }
  authenticate(username:string, title: string, id:number) {

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('title', title);
    sessionStorage.setItem('workerId', id.toString());
    sessionStorage.setItem("loggedAs", "BL Employee");
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null)
  }

  logOut() {
    sessionStorage.clear();
  }
}
