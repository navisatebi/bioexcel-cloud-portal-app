import { Component } from '@angular/core';
import { CredentialService } from 'ng2-cloud-portal-service-lib';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html'
})
export class WelcomePageComponent {
  constructor( public credentialService: CredentialService ) {

  }
}