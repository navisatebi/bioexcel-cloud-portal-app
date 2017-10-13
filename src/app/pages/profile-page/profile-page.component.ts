import { Component, ViewChild, ElementRef } from '@angular/core';
import { ProfileComponent } from 'ng2-cloud-portal-presentation-lib';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AddCloudProviderModalComponent } from './add-cloud-provider-modal.component';

@Component({
  selector: 'profile-page',
  styleUrls: [ './profile-page.component.css' ],
  templateUrl:  './profile-page.component.html'
})
export class ProfilePageComponent {

  bsModalRef: BsModalRef;
  @ViewChild('profileComponent') profileComponent: ProfileComponent;

  constructor(private modalService: BsModalService) {

  }

  public openAddCloudProviderModal() {
    this.bsModalRef = this.modalService.show(AddCloudProviderModalComponent);
    this.bsModalRef.content.title = 'New Cloud Provider';
    this.bsModalRef.content.profileComponent = this.profileComponent;
  }
}

