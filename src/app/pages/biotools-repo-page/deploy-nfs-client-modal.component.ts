import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BiotoolsRepoPageComponent } from './biotools-repo-page.component';

@Component({
  selector: 'deploy-nfs-client-modal',
  templateUrl: './deploy-nfs-client-modal.component.html'
})
export class DeployNfsClientModalComponent {
  public title: string;
  public biotoolsRepoPageComponent: BiotoolsRepoPageComponent;
  
  constructor(public bsModalRef: BsModalRef) {}
  
}
