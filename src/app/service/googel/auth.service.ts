import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data:any  

  constructor(
    public afAuth: AngularFireAuth, 
    public router: Router
  ) {}

  GoogleAuth() {
   const load = JSON.parse(localStorage.getItem('isAuthenticated')!)
    if(!load){
     this.AuthLogin(new GoogleAuthProvider());
    }else{
      this.router.navigate(['/dashBoard'])
    }
    this.getUserId()
  }


  async AuthLogin(provider:any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      const user = await this.afAuth.authState.subscribe( data=>{
        this.data = data
        localStorage.setItem('isAuthenticated',JSON.stringify(this.data))
        this.router.navigate(['/dashBoard'])
      });
    } catch (error) {
    }
  }

  async getUserId(){
    this.afAuth.currentUser.then( data=>{
      this.data = data
      return this.data
    });
  }

  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('isAuthenticated')
    console.log('asjcb')
  }
  

  ngOnInit(): void {
    console.log( JSON.parse(localStorage.getItem('isAuthenticated')!))  
  }
}
