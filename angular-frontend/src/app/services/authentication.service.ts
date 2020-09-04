import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username:string, title: string, id:number) {

      sessionStorage.setItem('username', username);
      sessionStorage.setItem('title', title);
      sessionStorage.setItem('workerId', id.toString());
      sessionStorage.setItem("loggedAs", "BL Employee");
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.clear();
  }
}
