import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CredentialService, TokenService, AccountService, Account,
  CloudProviderParametersService, CloudProviderParameters,
  ErrorService } from 'ng2-cloud-portal-service-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bioexcelLogo = 'assets/img/Bioexcell_logo_1080px_transp-extra-space.png';
  name = 'Cloud Portal';
  bioExcelUrl = 'http://bioexcel.eu//';
  tsiGithubUrl = 'https://github.com/EMBL-EBI-TSI';
  loggedInAccount: Account;
  cloudProviderParameters: CloudProviderParameters[];
  sharedCloudProviderParameters: CloudProviderParameters[];

  constructor( public tokenService: TokenService,
    public credentialService: CredentialService,
    public accountService: AccountService,
    public cloudProviderParametersService: CloudProviderParametersService,
    public errorService: ErrorService,
    public router: Router) {
    if (tokenService.getToken()) {
        this.accountService.getAccount(
            this.credentialService.getUsername(),
            this.tokenService.getToken()
        ).subscribe(
            (account) => {
                this.loggedInAccount = account;
            }
        );
    }
}

logOut() {
    this.credentialService.clearCredentials();
    this.tokenService.clearToken();
    this.router.navigateByUrl('/welcome');
}

ngOnInit() {
    
}

public setCurrentlySelectedCloudProviderParameters(cloudProviderParameters: CloudProviderParameters) {
    this.cloudProviderParametersService.currentlySelectedCloudProviderParameters = cloudProviderParameters;
}

}
