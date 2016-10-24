import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BiotoolsApplicationService } from './services/biotools-application.service';
import { BiotoolsApplication } from './services/biotools-application';
import { ErrorService } from 'ng2-cloud-portal-service-lib';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'biotools-repo-page',
  styles: [require('./biotools-repo-page.style.css')],
  template: require('./biotools-repo-page.template.html'),
  providers: [ BiotoolsApplicationService ],
  directives: [ ACCORDION_DIRECTIVES, DROPDOWN_DIRECTIVES ]
})
export class BiotoolsRepoPage {

  applications: BiotoolsApplication[];

  constructor(private _biotoolsApplicationService: BiotoolsApplicationService,
              private _errorService: ErrorService,
              private _router: Router,) {
    this._updateRepository();
  }

  private _updateRepository() {
    this._biotoolsApplicationService.getAll()
      .subscribe(
      applications => {
        console.log('[BiotoolsRepoPage] Applications data is %O', applications);
        this.applications = applications;
      },
      error => {
        console.log('[BiotoolsRepoPage] error %O', error);
        this._errorService.setCurrentError(error);
        this._router.navigateByUrl('/error');
      },
      () => {
          console.log('[BiotoolsRepoPage] Applications data retrieval complete');
      }
    );
  }
}