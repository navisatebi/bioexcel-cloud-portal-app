import { Component } from '@angular/core';
import { VolumesComponent } from 'ng2-cloud-portal-presentation-lib';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'volumes-page',
  directives: [ VolumesComponent, ACCORDION_DIRECTIVES, TAB_DIRECTIVES ],
  styles: [require('./volumes-page.style.css')],
  template: require('./volumes-page.template.html')
})
export class VolumesPage {

}