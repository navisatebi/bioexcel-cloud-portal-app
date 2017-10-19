import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProfileComponent } from 'ng2-cloud-portal-presentation-lib';

@Component({
  selector: 'add-deployment-parameters-modal',
  templateUrl: './add-deployment-parameters-modal.component.html'
})
export class AddDeploymentParametersModalComponent {
  public title: string;
  public profileComponent: ProfileComponent;
  
  constructor(public bsModalRef: BsModalRef) {}
  
}
