/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { CredentialService } from 'ng2-cloud-portal-service-lib';
import { Router } from '@angular/router';
import { TokenService, AccountService, Account,
    CloudProviderParametersService, CloudProviderParameters,
    ErrorService } from 'ng2-cloud-portal-service-lib';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    directives: [ DROPDOWN_DIRECTIVES ],
    styleUrls: [ './app.style.css' ],
    template: require('./app.template.html')
})
export class App {
    bioexcelLogo = 'assets/img/Bioexcell_logo_1080px_transp-extra-space.png';
    name = 'Cloud Portal';
    bioExcelUrl = 'http://bioexcel.eu//';
    tsiGithubUrl = 'https://github.com/EMBL-EBI-TSI';
    loggedInAccount: Account;
    cloudProviderParameters: CloudProviderParameters[];
    sharedCloudProviderParameters: CloudProviderParameters[];

    public items:string[] = ['The first choice!',
        'And another choice for you.', 'but wait! A third!'];

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
            this.updateCloudProviders(true);
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

    public updateCloudProviders(open:boolean):void {
        if (open) {
            this.cloudProviderParametersService.getAll(
                this.credentialService.getUsername(),
                this.tokenService.getToken())
            .subscribe(
                cloudProviderParameters => {
                    console.log('[App] cloud provider parameters data is %O', cloudProviderParameters);
                    this.cloudProviderParameters = cloudProviderParameters
                },
                error => {
                    console.log('[App] error %O', error);
                    if (error[0]) {
                        error = error[0];
                    }
                    this.errorService.setCurrentError(error);
                    this.router.navigateByUrl('/error');
                },
                () => {
                    console.log('[App] Cloud provider parameters data retrieval complete');
                }
            );

            this.cloudProviderParametersService.getAllShared(
                this.credentialService.getUsername(),
                this.tokenService.getToken())
            .subscribe(
                cloudProviderParameters => {
                    console.log('[App] shared cloud provider parameters data is %O', cloudProviderParameters);
                    this.sharedCloudProviderParameters = cloudProviderParameters
                },
                error => {
                    console.log('[App] error %O', error);
                    if (error[0]) {
                        error = error[0];
                    }
                    this.errorService.setCurrentError(error);
                    this.router.navigateByUrl('/error');
                },
                () => {
                    console.log('[App] shared Cloud provider parameters data retrieval complete');
                }
            );
        }
    }
}
