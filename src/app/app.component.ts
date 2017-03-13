/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { CredentialService } from 'ng2-cloud-portal-service-lib';
import { Router } from '@angular/router';
import { TokenService, AccountService, Account, CloudProviderParametersService } from 'ng2-cloud-portal-service-lib';
import {  ProfileComponent } from 'ng2-cloud-portal-presentation-lib';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';


/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    directives: [  ProfileComponent, DROPDOWN_DIRECTIVES ],
    styleUrls: [ './app.style.css' ],
    template: require('./app.template.html')
})
export class App {
    bioexcelLogo = 'assets/img/Bioexcell_logo_1080px_transp-extra-space.png';
    name = 'Cloud Portal';
    bioExcelUrl = 'http://bioexcel.eu//';
    tsiGithubUrl = 'https://github.com/EMBL-EBI-TSI';
    loggedInAccount: Account;
    public items:string[] = ['The first choice!',
        'And another choice for you.', 'but wait! A third!'];

    constructor( public tokenService: TokenService,
        public credentialService: CredentialService,
        public accountService: AccountService,
        public cloudProviderParametersService: CloudProviderParametersService,
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
 
    public toggled(open:boolean):void {
        
    }
}
