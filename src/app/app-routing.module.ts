import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { HistoricComponent } from './pages/historic/historic.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'historic', component : HistoricComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
