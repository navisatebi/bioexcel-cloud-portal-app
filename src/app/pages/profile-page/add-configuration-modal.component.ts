import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProfileComponent } from 'ng2-cloud-portal-presentation-lib';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ConfigurationService, CredentialService,
  CloudProviderParametersService, ErrorService, TokenService } from 'ng2-cloud-portal-service-lib';
import { AddCloudProviderModalComponent } from './add-cloud-provider-modal.component';

@Component({
  selector: 'add-configuration-modal',
  templateUrl: './add-configuration-modal.component.html'
})
export class AddConfigurationModalComponent {
  public title: string;
  public profileComponent: ProfileComponent;
  filteredCloudProviderNames: any;
  cloudProviderNames: string[];
  filteredDeploymentParametersNames: any;
  deploymentParametersNames: string[];
  configurationForm: FormGroup;

  constructor(private fb: FormBuilder, 
    public cloudProviderParametersService: CloudProviderParametersService,
    public configurationService: ConfigurationService,
    public credentialService: CredentialService,
    public tokenService: TokenService,
    public errorService: ErrorService,
    public router: Router,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef) {
  
    this.configurationForm = this.fb.group({
      'name': ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]+([\\s\\.\\-\\_]?[a-zA-Z0-9]+)*")]
      )],
      'cloudProviderParametersName': ['', Validators.required],
      'sshKey': ['', Validators.required],
      'deploymentParametersName': ['', Validators.required],
    });

    this.cloudProviderParametersService.getOwnedAndSharedCloudProviders(this.credentialService.getUsername(), this.tokenService.getToken())
      .subscribe(
      cloudProviders => {
        console.log('[AddConfigurationDialog] cloud providers data is %O', cloudProviders);
        this.cloudProviderNames = cloudProviders.map(cloudProvider => cloudProvider.name);
        this.filteredCloudProviderNames = this.configurationForm.controls['cloudProviderParametersName'].valueChanges
          .startWith(null)
          .map(cloudProvider => this.filterCloudProviders(cloudProvider));
      },
      error => {
        console.log('[AddConfigurationDialog] error %O', error);
        if (error[0]) {
          error = error[0];
        }
        this.errorService.setCurrentError(error);
        this.router.navigateByUrl('/error');
      },
      () => {
        console.log('[AddConfigurationDialog] Cloud provider parameters data retrieval complete');
      }
      );

     

    this.configurationService.getOwnedAndSharedDeploymentParameters(this.credentialService.getUsername(), this.tokenService.getToken())
      .subscribe(
      deploymentParameters => {
        console.log('[AddConfigurationDialog] deployment parameters data is %O', deploymentParameters);
        this.deploymentParametersNames = deploymentParameters.map(deploymentParameters => deploymentParameters.name);
        this.filteredDeploymentParametersNames = this.configurationForm.controls['deploymentParametersName'].valueChanges
          .startWith(null)
          .map(deploymentParameters => this.filterDeploymentParameters(deploymentParameters));
      },
      error => {
        console.log('[AddConfigurationDialog] error %O', error);
        if (error[0]) {
          error = error[0];
        }
        this.errorService.setCurrentError(error);
        this.router.navigateByUrl('/error');
      },
      () => {
        console.log('[AddConfigurationDialog] Cloud provider parameters data retrieval complete');
      }
      );
    }

    filterCloudProviders(val: string) {
      return val ? this.cloudProviderNames.filter(s => new RegExp(`^${val}`, 'gi').test(s))
        : this.cloudProviderNames;
    }
  
    filterDeploymentParameters(val: string) {
      return val ? this.deploymentParametersNames.filter(s => new RegExp(`^${val}`, 'gi').test(s))
        : this.deploymentParametersNames;
    }

    public openAddCloudProviderModal() {
      this.bsModalRef = this.modalService.show(AddCloudProviderModalComponent);
      this.bsModalRef.content.title = 'New Cloud Provider';
      this.bsModalRef.content.profileComponent = this.profileComponent;
    }
}
