import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/googel/auth.service'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  data:any  

  constructor(
    public afAuth:AuthService
  ) {}
  
  ngOnInit(): void {
   
  }

}

