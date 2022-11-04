import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from 'src/app/service/googel/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  theme = false;
  userData!:any
  provider:any
  time!:any

  constructor(
    public afAuth:AuthService
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('isAuthenticated')!)
    var time = new Date();
    this.time =  time. toLocaleString('en-US', { hour: 'numeric', })
    if(this.time >= '5pm'){
      this.toggleTheme()
    }else{
      this.theme = false
    }
  }
  toggleTheme() {
    this.theme = !this.theme;
    this.setTheme(this.theme);
  }

  private setTheme(darkTheme: boolean) {
    const lightClass = 'theme--light';
    const darkClass = 'theme--dark';
    const removeClass = darkTheme ? lightClass : darkClass;
    const addClass = darkTheme ? darkClass : lightClass;
    document.body.classList.remove(removeClass);
    document.body.classList.add(addClass);
  }

  isShowing!: boolean;

toggleSidenav() {
   this.isShowing = !this.isShowing;
}

callMethods() {
    this.toggleSidenav();
}
}
