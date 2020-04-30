import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BiotoolsRepoPageComponent } from './biotools-repo-page.component';

@Component({
  selector: 'deploy-binder-modal',
  templateUrl: './deploy-binder-modal.component.html'
})
export class DeployBinderModalComponent {
  public title: string;
  public biotoolsRepoPageComponent: BiotoolsRepoPageComponent;
  public applicationType: string;
  constructor(public bsModalRef: BsModalRef) {}

}
