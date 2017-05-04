import { Component } from '@angular/core';
import { AboutPage } from '../about-page';
import { LoginPage } from '../login-page';
import { BiotoolsRepoPage } from '../biotools-repo-page';
import { CredentialService } from 'ng2-cloud-portal-service-lib';

@Component({
  selector: 'welcome-page',
  template: require('./welcome-page.template.html'),
  directives: [ AboutPage, LoginPage, BiotoolsRepoPage ]
})
export class WelcomePage {
  constructor( public credentialService: CredentialService ) {

  }
}