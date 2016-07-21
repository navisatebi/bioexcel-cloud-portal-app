import { Component } from '@angular/core';
import { ProfileComponent } from 'ng2-cloud-portal-presentation-lib';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'profile-page',
  directives: [ ProfileComponent, AlertComponent ],
  styles: [require('./profile-page.style.css')],
  template: require('./profile-page.template.html')
})
export class ProfilePage {

}
