import { Component } from '@angular/core';
import { LoginComponent } from 'ng2-cloud-portal-presentation-lib';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'login-page',
  directives: [ LoginComponent ],
  styles: [require('./login-page.style.css')],
  template: require('./login-page.template.html')
})
export class LoginPage {

}
