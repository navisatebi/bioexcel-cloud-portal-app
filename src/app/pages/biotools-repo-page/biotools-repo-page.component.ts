import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BiotoolsApplicationService } from './services/biotools-application.service';
import { BiotoolsApplication } from './services/biotools-application';
import { ErrorService, CloudProviderParametersService } from 'ng2-cloud-portal-service-lib';
import { ACCORDION_DIRECTIVES, DROPDOWN_DIRECTIVES,
  PAGINATION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'biotools-repo-page',
  styles: [require('./biotools-repo-page.style.css')],
  template: require('./biotools-repo-page.template.html'),
  providers: [ BiotoolsApplicationService ],
  directives: [ ACCORDION_DIRECTIVES, DROPDOWN_DIRECTIVES, PAGINATION_DIRECTIVES ]
})
export class BiotoolsRepoPage {

  public totalItems: number;
  public currentPage: number = 1;

  applications: BiotoolsApplication[];

  constructor(private _biotoolsApplicationService: BiotoolsApplicationService,
              private _errorService: ErrorService,
              private _router: Router,
              public cloudProviderParametersService: CloudProviderParametersService) {
    this._updateRepository();
  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
 
  public pageChanged(event: any): void {
    this.currentPage = event.page;
    console.log('Page changed to: ' + event.page);
    console.log('Current page is: ' + this.currentPage);
    console.log('Number items per page: ' + event.itemsPerPage);
    this._updateRepository();
  }

  private _updateRepository() {
    this._biotoolsApplicationService.getAll(this.currentPage)
      .subscribe(
      applicationPage => {
        console.log('[BiotoolsRepoPage] Applications data is %O', applicationPage);
        this.applications = applicationPage.list;
        this.totalItems = applicationPage.count;
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