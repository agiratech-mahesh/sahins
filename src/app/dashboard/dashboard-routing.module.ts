import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ExpenseCardComponent } from './component/expense-card/expense-card.component';
import { Expense2CardComponent } from './component/expense2-card/expense2-card.component';

const routes: Routes = [{ path: '', component: DashboardComponent,
children:[
  {path:'', component: ExpenseCardComponent},
  
]
},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
