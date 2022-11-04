import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { AuthGuard } from 'src/app/service/authgaurd/auth.guard';
const routes: Routes = [
  {path:'',component:SignInComponent},
  { path: 'dashBoard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), 
  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
