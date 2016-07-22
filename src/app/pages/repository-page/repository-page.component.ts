import { Component } from '@angular/core';
import { RepositoryComponent } from 'ng2-cloud-portal-presentation-lib';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'repository-page',
  directives: [ RepositoryComponent, ACCORDION_DIRECTIVES, DROPDOWN_DIRECTIVES ],
  styles: [require('./repository-page.style.css')],
  template: require('./repository-page.template.html')
})
export class RepositoryPage {

}