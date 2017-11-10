import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BiotoolsRepoPageComponent } from './biotools-repo-page.component';

@Component({
  selector: 'deploy-biotool-modal',
  templateUrl: './deploy-biotool-modal.component.html'
})
export class DeployBiotoolModalComponent {
  public title: string;
  public biotoolsRepoPageComponent: BiotoolsRepoPageComponent;
  
  constructor(public bsModalRef: BsModalRef) {}
  
}
