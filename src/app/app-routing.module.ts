import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { RegisterComponent } from './pages/register/register.component';
import { StatsComponent } from './pages/stats/stats.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { SignalisationComponent } from './pages/signalisation/signalisation.component';
import { SignalisationPollutionComponent } from './components/signalisation-pollution/signalisation-pollution.component';
import { SignalisationEtoilesComponent } from './components/signalisation-etoiles/signalisation-etoiles.component';
import { SignalisationRapportComponent } from './components/signalisation-rapport/signalisation-rapport.component';
import { SessionLaunchComponent } from './pages/session-launch/session-launch.component';
import { SessionLaunchedComponent } from './pages/session-launch/session-launched/session-launched.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'profile', component: ProfilComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'historic', component: HistoricComponent },
  { path: 'signalisation', component: SignalisationComponent },
  { path: 'signalisation-pollution', component: SignalisationPollutionComponent }, //temp
  { path: 'signalisation-etoiles', component: SignalisationEtoilesComponent }, //temp
  { path: 'signalisation-rapport', component: SignalisationRapportComponent }, //temp
  { path: 'historic', component : HistoricComponent},
  { path: 'session', component : SessionLaunchComponent},
  { path: 'session/on', component : SessionLaunchedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
