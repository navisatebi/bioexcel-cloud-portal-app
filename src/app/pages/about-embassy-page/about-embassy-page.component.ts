import { Component } from '@angular/core';

@Component({
  selector: 'about-embassy-page',
  styleUrls: [ './about-embassy-page.component.css' ],
  templateUrl: './about-embassy-page.component.html'
})
export class AboutEmbassyPageComponent {
  ebiLogoWhite = 'assets/img/EMBL_EBI_Logo_white.png';
  ebiLogoBlack = 'assets/img/EMBL_EBI_Logo_black.png';
  ebiLogoLarge = 'assets/img/embl-logo.png';
  ebiLogoOnly = 'assets/img/embl_logo_only.png';
  embassyLogo = 'assets/img/EMBASSYCloud_logo.png';
}