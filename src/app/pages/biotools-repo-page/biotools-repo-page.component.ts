import { Component } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Router } from '@angular/router';
import { BiotoolsApplicationService } from './services/biotools-application.service';
import { BiotoolsApplication } from './services/biotools-application';
import { ErrorService, DeploymentService, Application, ApplicationService,
    CredentialService, TokenService, Configuration, ConfigurationService
  } from 'ng2-cloud-portal-service-lib';
import { DeployBiotoolModalComponent } from './deploy-biotool-modal.component';
import { DeployNfsClientModalComponent } from './deploy-nfs-client-modal.component';

@Component({
  selector: 'biotools-repo-page',
  styleUrls: [ './biotools-repo-page.component.css' ],
  templateUrl:  './biotools-repo-page.component.html',
})
export class BiotoolsRepoPageComponent {

  public totalItems: number;
  public currentPage: number = 1;

  bsModalRef: BsModalRef;
  applications: BiotoolsApplication[];
  selectedApplication: BiotoolsApplication;
  selectedApplicationForNfs: BiotoolsApplication;
  configurations: ConfigurationService[];
  sharedConfigurations: ConfigurationService[];
  currentlySelectedConfiguration: Configuration;
  currentlySelectedConfigurationForNfs: Configuration;
  newBioToolsDeploymentForm: FormGroup;
  newNfsClientDeploymentForm: FormGroup;

  constructor(      private fb: FormBuilder,
              private _biotoolsApplicationService: BiotoolsApplicationService,
              private _errorService: ErrorService,
              private _router: Router,
              public credentialService: CredentialService,
              public tokenService: TokenService,
              public deploymentService: DeploymentService,
              public applicationService: ApplicationService,
              public configurationService: ConfigurationService,
              private modalService: BsModalService) {
    this._updateRepository();
    if (this.tokenService.getToken()) this.updateConfigurations(true);
    this.newBioToolsDeploymentForm = this.fb.group({
      'sshKey': ['']
    });
    this.newNfsClientDeploymentForm = this.fb.group({
      'sshKey': [''],
      'nfsServerHost': [''],
      'nfsRemoteFolder': ['']
    });
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

  public setCurrentlySelectedConfiguration(configuration: Configuration) {
    this.currentlySelectedConfiguration = configuration;
  }

  public setCurrentlySelectedConfigurationForNfs(configuration: Configuration) {
    this.currentlySelectedConfigurationForNfs = configuration;
  }

  public updateConfigurations(open:boolean):void {
    if (open) {
        this.configurationService.getAll(
            this.credentialService.getUsername(),
            this.tokenService.getToken())
        .subscribe(
            configurations => {
                console.log('[BiotoolsRepoPage] configurations data is %O', configurations);
                this.configurations = configurations
            },
            error => {
                console.log('[BiotoolsRepoPage] error %O', error);
                if (error[0]) {
                    error = error[0];
                }
                this._errorService.setCurrentError(error);
                this._router.navigateByUrl('/error');
            },
            () => {
                console.log('[BiotoolsRepoPage] configurations data retrieval complete');
            }
        );

        this.configurationService.getAllSharedConfigurations(
            this.credentialService.getUsername(),
            this.tokenService.getToken())
        .subscribe(
            sharedConfigurations => {
                console.log('[BiotoolsRepoPage] shared configurations data is %O', sharedConfigurations);
                this.sharedConfigurations = sharedConfigurations
            },
            error => {
                console.log('[BiotoolsRepoPage] error %O', error);
                if (error[0]) {
                    error = error[0];
                }
                this._errorService.setCurrentError(error);
                this._router.navigateByUrl('/error');
            },
            () => {
                console.log('[BiotoolsRepoPage] shared configurations data retrieval complete');
            }
        );
    }
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

  public deployBiotoolsApplication(application: BiotoolsApplication, sshKey: string) {

    console.log('[BiotoolsRepoPage] Adding BioExcel launcher deployment for application '
        + application.name + ' from ' + application.download[0].url + ' into %O', 
        this.currentlySelectedConfiguration);

    this.deploymentService.add(
        this.credentialService.getUsername(),
        this.tokenService.getToken(),
        <Application>{ 
          name: 'BioExcel launcher',
          accountUsername: 'usr-e8ea687c-d04f-45ba-99e1-3515649141a7',
          repoUri:'https://github.com/EMBL-EBI-TSI/cpa-bioexcel-launcher'
        },
        null,
        {},
        {
          application_name: application.name,
          image_source_url: application.download[0].url
        },
        {},
        <Configuration>this.currentlySelectedConfiguration,
        sshKey
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

  public deployNfsClientApplication(application: BiotoolsApplication, sshKey: string) {

    console.log('[BiotoolsRepoPage] Adding NFS client deployment for application '
        + application.name + ' from ' + application.download[0].url + ' into %O', 
        this.currentlySelectedConfiguration);

    this.deploymentService.add(
        this.credentialService.getUsername(),
        this.tokenService.getToken(),
        <Application>{ 
          name: 'NFS-Client',
          accountUsername: 'usr-e8ea687c-d04f-45ba-99e1-3515649141a7',
          repoUri:'https://github.com/EMBL-EBI-TSI/cpa-nfs-client'
        },
        null,
        {},
        {
          application_name: application.name,
          image_source_url: application.download[0].url
        },
        {},
        <Configuration>this.currentlySelectedConfigurationForNfs,
        sshKey
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

  public openDeployBiotoolModal() {
    this.bsModalRef = this.modalService.show(DeployBiotoolModalComponent);
    this.bsModalRef.content.title = 'Deploy tool';
    this.bsModalRef.content.biotoolsRepoPageComponent = this;
  }

  public openDeployNfsClientModal() {
    this.bsModalRef = this.modalService.show(DeployNfsClientModalComponent);
    this.bsModalRef.content.title = 'Deploy NFS client';
    this.bsModalRef.content.biotoolsRepoPageComponent = this;
  }
}