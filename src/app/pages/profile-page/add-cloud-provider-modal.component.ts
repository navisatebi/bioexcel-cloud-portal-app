import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProfileComponent } from 'ng2-cloud-portal-presentation-lib';

@Component({
  selector: 'add-cloud-provider-modal',
  templateUrl: './add-cloud-provider-modal.component.html'
})
export class AddCloudProviderModalComponent {
  public title: string;
  public profileComponent: ProfileComponent;
  
  constructor(public bsModalRef: BsModalRef) {}
  
}
