import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { JwtHelper } from 'angular2-jwt';
import { BsDropdownModule, PaginationModule, AccordionModule,
  AlertModule, ModalModule, TabsModule } from 'ngx-bootstrap';

import { TokenService, AuthService, ConfigService,
  CredentialService, ErrorService, AccountService,
  ConfigurationService, CloudProviderParametersService,
  ApplicationService, VolumeInstanceService, VolumeSetupService,
  TeamService, DeploymentService } from 'ng2-cloud-portal-service-lib';
import { LoginComponent, ErrorComponent, DeploymentsComponent,
        VolumesComponent, ProfileComponent } from 'ng2-cloud-portal-presentation-lib';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutAppDBPageComponent } from './pages/about-appdb-page/about-appdb-page.component';
import { AboutEmbassyPageComponent } from './pages/about-embassy-page/about-embassy-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BiotoolsRepoPageComponent } from './pages/biotools-repo-page/biotools-repo-page.component';
import { BiotoolsApplicationService } from './pages/biotools-repo-page/services/biotools-application.service';
import { DeploymentsPageComponent } from './pages/deployments-page/deployments-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { VolumesPageComponent } from './pages/volumes-page/volumes-page.component';


const appRoutes: Routes = [
  { path: 'profile', component: ProfilePageComponent },
  { path: 'volumes', component: VolumesPageComponent },
  { path: 'deployments', component: DeploymentsPageComponent },
  { path: 'biotools', component: BiotoolsRepoPageComponent },
  { path: 'embassy', component: AboutEmbassyPageComponent },
  { path: 'appdb', component: AboutAppDBPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', component: WelcomePageComponent },
];

export function provideConfig() {
  return new ConfigService(environment.apiAddress, environment.authAddress);
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProfilePageComponent,
    ProfileComponent,
    VolumesPageComponent,
    VolumesComponent,
    ErrorPageComponent,
    ErrorComponent,
    AboutPageComponent,
    AboutAppDBPageComponent,
    AboutEmbassyPageComponent,
    LoginPageComponent,
    LoginComponent,
    BiotoolsRepoPageComponent,
    DeploymentsPageComponent,
    DeploymentsComponent
  ],
  imports: [
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    AlertModule.forRoot(),
    ReactiveFormsModule
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
