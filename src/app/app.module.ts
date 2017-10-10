import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';
import { JwtHelper } from 'angular2-jwt';
import { BsDropdownModule } from 'ngx-bootstrap';

import { TokenService, AuthService, ConfigService,
  CredentialService, ErrorService, AccountService,
  ConfigurationService, CloudProviderParametersService,
  ApplicationService, VolumeInstanceService, VolumeSetupService,
  TeamService, DeploymentService } from 'ng2-cloud-portal-service-lib';
import { LoginComponent } from 'ng2-cloud-portal-presentation-lib';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutAppDBPageComponent } from './pages/about-appdb-page/about-appdb-page.component';
import { AboutEmbassyPageComponent } from './pages/about-embassy-page/about-embassy-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const appRoutes: Routes = [
  { path: 'embassy', component: AboutEmbassyPageComponent },
  { path: 'appdb', component: AboutAppDBPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: AboutPageComponent },
];

export function provideConfig() {
  return new ConfigService(environment.apiAddress, environment.authAddress);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    AboutAppDBPageComponent,
    AboutEmbassyPageComponent,
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule    
  ],
  entryComponents: [
    
  ],
  providers: [
    { provide: ConfigService, useFactory: provideConfig },
    TokenService,
    AuthService,
    CredentialService,
    ErrorService,
    AccountService,
    ApplicationService,
    DeploymentService,
    VolumeInstanceService,
    VolumeSetupService,
    ConfigurationService,
    TeamService,
    CloudProviderParametersService,
    JwtHelper ],
  bootstrap: [AppComponent]
})
export class AppModule { }
