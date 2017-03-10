import { Component } from '@angular/core';
import { ProfileComponent } from 'ng2-cloud-portal-presentation-lib';
import { DROPDOWN_DIRECTIVES, TAB_DIRECTIVES, ACCORDION_DIRECTIVES,
  AlertComponent, MODAL_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'profile-page',
  directives: [ ProfileComponent, AlertComponent,
    ACCORDION_DIRECTIVES, DROPDOWN_DIRECTIVES, TAB_DIRECTIVES ],
  styles: [require('./profile-page.style.css')],
  template: require('./profile-page.template.html')
})
export class ProfilePage {

}
