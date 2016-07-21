import { Component } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'welcome-page',
  template: require('./welcome-page.template.html'),
  directives: [ AlertComponent ]
})
export class WelcomePage {
  
}