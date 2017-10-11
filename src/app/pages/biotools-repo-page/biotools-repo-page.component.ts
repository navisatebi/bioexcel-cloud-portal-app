import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BiotoolsApplicationService } from './services/biotools-application.service';
import { BiotoolsApplication } from './services/biotools-application';
import { ErrorService, CloudProviderParametersService,
    DeploymentService, Application, ApplicationService,
    CredentialService, TokenService, Configuration } from 'ng2-cloud-portal-service-lib';

@Component({
  selector: 'biotools-repo-page',
  styleUrls: [ './biotools-repo-page.component.css' ],
  templateUrl:  './biotools-repo-page.component.html',
})
export class BiotoolsRepoPageComponent {

  public totalItems: number;
  public currentPage: number = 1;

  applications: BiotoolsApplication[];

  constructor(private _biotoolsApplicationService: BiotoolsApplicationService,
              private _errorService: ErrorService,
              private _router: Router,
              public credentialService: CredentialService,
              public tokenService: TokenService,
              public deploymentService: DeploymentService,
              public applicationService: ApplicationService,
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

  public deployBiotoolsApplication(application: BiotoolsApplication) {

    console.log('[BiotoolsRepoPage] Adding BioExcel launcher deployment for application '
        + application.name + ' from ' + application.download[0].url + ' into %O', 
        this.cloudProviderParametersService.currentlySelectedCloudProviderParameters);

    this.deploymentService.add(
        this.credentialService.getUsername(),
        this.tokenService.getToken(),
        <Application>{ 
          name: 'BioExcel launcher',
          accountUsername: 'usr-e8ea687c-d04f-45ba-99e1-3515649141a7',
          repoUri:'https://github.com/EMBL-EBI-TSI/cpa-bioexcel-launcher'
        },
        this.cloudProviderParametersService.currentlySelectedCloudProviderParameters,
        {},
        {
          application_name: application.name,
          disk_image: application.name,
          image_source_url: application.download[0].url
        },
        {},
        <Configuration>{}
    ).subscribe(
      deployment  => {
        console.log('[ApplicationComponent] deployed %O', deployment);
        this._router.navigateByUrl('/deployments');
      },
      error => {
        console.log('[ApplicationComponent] error %O', error);
        if (error[0]) {
          error = error[0];
        }
        this._errorService.setCurrentError(error);
        this._router.navigateByUrl('/error');
      }
    );
  }
}