import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProfileComponent } from 'ng2-cloud-portal-presentation-lib';

@Component({
  selector: 'add-team-modal',
  templateUrl: './add-team-modal.component.html'
})
export class AddTeamModalComponent {
  public title: string;
  public profileComponent: ProfileComponent;
  
  constructor(public bsModalRef: BsModalRef) {}
  
}
