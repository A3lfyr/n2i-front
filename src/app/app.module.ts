import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { InfoPlageComponent } from './components/info-plage/info-plage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { HistoricItemComponent } from './components/historic-item/historic-item.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { StatsComponent } from './pages/stats/stats.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HistoricComponent } from './pages/historic/historic.component';
import { MapComponent } from './components/map/map.component';
import { SignalisationComponent } from './pages/signalisation/signalisation.component';
import { SignalisationPollutionComponent } from './components/signalisation-pollution/signalisation-pollution.component';
import { SignalisationEtoilesComponent } from './components/signalisation-etoiles/signalisation-etoiles.component';
import { SignalisationRapportComponent } from './components/signalisation-rapport/signalisation-rapport.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InfoPlageComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    HistoricItemComponent,
    ProfilComponent,
    StatsComponent,
    HistoricComponent,
    MapComponent,
    SignalisationComponent,
    SignalisationPollutionComponent,
    SignalisationEtoilesComponent,
    SignalisationRapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
