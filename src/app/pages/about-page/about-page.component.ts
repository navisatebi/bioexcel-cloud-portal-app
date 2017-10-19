import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  styleUrls: [ './about-page.component.css' ],
  templateUrl:'./about-page.component.html'
})
export class AboutPageComponent {
  ebiLogoWhite = 'assets/img/EMBL_EBI_Logo_white.png';
  ebiLogoBlack = 'assets/img/EMBL_EBI_Logo_black.png';
  ebiLogoLarge = 'assets/img/embl-logo.png';
  ebiLogoOnly = 'assets/img/embl_logo_only.png';
  elixirLogo = 'assets/img/elixir_logo.png';
  cloudsLogo = 'assets/img/clouds_logo.png';
}