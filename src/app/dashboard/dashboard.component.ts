import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isAuthenticated:any
  mins:any

  constructor() { 
    this.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')!)
    console.log(this.isAuthenticated)
  }

  ngOnInit(): void {

}



  
}
