import { Component } from '@angular/core';
import { VolumesComponent } from 'ng2-cloud-portal-presentation-lib';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'volumes-page',
  styleUrls: [ './volumes-page.component.css' ],
  templateUrl: './volumes-page.component.html'
})
export class VolumesPageComponent {
  url1: string = "https://193.62.55.150:8888/sources/1/dashboards/1?refresh=Paused&lower=now%28%29%20-%2030d&present=true";
  url2: string = "https://193.62.55.150:8888/sources/1/dashboards/2?refresh=Paused&lower=now%28%29%20-%2030d&present=true";
  grafanUrl: string = "https://193.62.55.150:3000/d/JAYnLgkGk/aap-user-statistics?orgId=1";
  urlSafe1: SafeResourceUrl;
  urlSafe2: SafeResourceUrl;
  gurlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe1= this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
    this.urlSafe2= this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
    this.gurlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.grafanUrl);
  }

}
