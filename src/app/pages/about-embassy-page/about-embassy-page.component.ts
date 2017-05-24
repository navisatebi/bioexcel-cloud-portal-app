import { Component } from '@angular/core';

@Component({
  selector: 'about-embassy-page',
  styles: [ require('./about-embassy-page.style.css') ],
  template: require('./about-embassy-page.template.html')
})
export class AboutEmbassyPage {
  ebiLogoWhite = 'assets/img/EMBL_EBI_Logo_white.png';
  ebiLogoBlack = 'assets/img/EMBL_EBI_Logo_black.png';
  ebiLogoLarge = 'assets/img/embl-logo.png';
  ebiLogoOnly = 'assets/img/embl_logo_only.png';
  embassyLogo = 'assets/img/EMBASSYCloud_logo.png';
}