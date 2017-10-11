import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { JwtHelper } from 'angular2-jwt';
import { BsDropdownModule, PaginationModule, AccordionModule } from 'ngx-bootstrap';

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
import { BiotoolsRepoPageComponent } from './pages/biotools-repo-page/biotools-repo-page.component';
import { BiotoolsApplicationService } from './pages/biotools-repo-page/services/biotools-application.service';


const appRoutes: Routes = [
  { path: 'biotools', component: BiotoolsRepoPageComponent },
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
    LoginComponent,
    BiotoolsRepoPageComponent
  ],
  imports: [
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule 
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
    JwtHelper,
    BiotoolsApplicationService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
