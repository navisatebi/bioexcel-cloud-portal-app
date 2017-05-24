import { Component } from '@angular/core';

@Component({
  selector: 'about-appdb-page',
  styles: [ require('./about-appdb-page.style.css') ],
  template: require('./about-appdb-page.template.html')
})
export class AboutAppDBPage {
  appdbLogo = 'assets/img/appdb_logo.png';
}