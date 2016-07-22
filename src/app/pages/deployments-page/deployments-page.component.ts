import { Component } from '@angular/core';
import { DeploymentsComponent } from 'ng2-cloud-portal-presentation-lib';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'deployments-page',
  directives: [ DeploymentsComponent, AlertComponent, ACCORDION_DIRECTIVES ],
  styles: [require('./deployments-page.style.css')],
  template: require('./deployments-page.template.html')
})
export class DeploymentsPage {

}