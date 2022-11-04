import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {OverlayModule} from '@angular/cdk/overlay';
import {MatSidenavModule} from '@angular/material/sidenav';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HeaderComponent } from 'src/app/component/sign-in/ Component/header/header/header.component';
import { FooterComponent } from 'src/app/component/sign-in/ Component/footer/footer.component';
import { ExpenseCardComponent } from './component/expense-card/expense-card.component';
import { Expense2CardComponent } from './component/expense2-card/expense2-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ExpenseCardComponent,
    Expense2CardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    OverlayModule,
    MatSidenavModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatCardModule,
    MatListModule,
    MatDividerModule
  ]
})
export class DashboardModule { }
