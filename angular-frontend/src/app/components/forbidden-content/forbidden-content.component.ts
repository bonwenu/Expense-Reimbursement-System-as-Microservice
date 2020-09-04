import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden-content',
  templateUrl: './forbidden-content.component.html',
  styleUrls: ['./forbidden-content.component.css']
})
export class ForbiddenContentComponent implements OnInit {

  constructor(private router: Router) { }

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

}
