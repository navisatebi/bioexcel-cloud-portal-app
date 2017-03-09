import { Component } from '@angular/core';
import { AboutPage } from '../about-page';
import { LoginPage } from '../login-page';
import { RepositoryPage } from '../repository-page';
import { CredentialService } from 'ng2-cloud-portal-service-lib';

@Component({
  selector: 'welcome-page',
  template: require('./welcome-page.template.html'),
  directives: [ AboutPage, LoginPage, RepositoryPage ]
})
export class WelcomePage {
  constructor( public credentialService: CredentialService ) {

  }
}