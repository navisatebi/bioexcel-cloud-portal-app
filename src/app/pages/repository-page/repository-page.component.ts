import { Component, DoCheck } from '@angular/core';
import { ACCORDION_DIRECTIVES, DROPDOWN_DIRECTIVES, AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { RepositoryComponent, ApplicationCloudProviderPipe } from 'ng2-cloud-portal-presentation-lib';
import { CloudProviderParametersService } from 'ng2-cloud-portal-service-lib';

@Component({
  selector: 'repository-page',
  directives: [ RepositoryComponent, ACCORDION_DIRECTIVES, DROPDOWN_DIRECTIVES, AlertComponent ],
  pipes: [ ApplicationCloudProviderPipe ],  
  styles: [require('./repository-page.style.css')],
  template: require('./repository-page.template.html')
})
export class RepositoryPage implements DoCheck {

  cloudProviderFilters: string[] = ["AWS","GCP","OSTACK","AZURE"];

  constructor(public cloudProviderParametersService: CloudProviderParametersService) {
    this.updateFilters();
  }

  updateFilters() {
    if (this.cloudProviderParametersService.currentlySelectedCloudProviderParameters) {
      this.cloudProviderFilters = [this.cloudProviderParametersService.currentlySelectedCloudProviderParameters.cloudProvider];
    }
  }

  ngDoCheck() {
    if (!(this.cloudProviderFilters.length==1 &&
      this.cloudProviderFilters.includes(this.cloudProviderParametersService.currentlySelectedCloudProviderParameters.cloudProvider))) {
      this.updateFilters();
    }
  }

}