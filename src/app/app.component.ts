/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { CredentialService } from 'ng2-cloud-portal-service-lib';
import { Router } from '@angular/router';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './app.style.css' ],
    template: require('./app.template.html')
})
export class App {
    bioexcelLogo = 'assets/img/Bioexcell_logo_1080px_transp-extra-space.png';
    name = 'BioExcel Cloud Portal';
    bioExcelUrl = 'http://bioexcel.eu//';
    tsiGithubUrl = 'https://github.com/EMBL-EBI-TSI';

    constructor(public credentialService: CredentialService,
        public router: Router) {

    }

    logOut() {
        this.credentialService.clearCredentials();
        this.router.navigateByUrl('/login');
    }

    ngOnInit() {
        console.log('Hello app');
    }

}
