import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BiotoolsRepoPageComponent } from './biotools-repo-page.component';

@Component({
  selector: 'deploy-ecp-image-modal',
  templateUrl: './deploy-ecp-image-modal.component.html'
})
export class DeployEcpImageModalComponent {
  public title: string;
  public biotoolsRepoPageComponent: BiotoolsRepoPageComponent;
  
  constructor(public bsModalRef: BsModalRef) {}
  
}
