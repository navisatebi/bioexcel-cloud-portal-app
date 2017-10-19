import { Component, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialService, TokenService,
  AuthService, JwtToken, Account,
  ErrorService, Error } from 'ng2-cloud-portal-service-lib';

@Component({
  selector: 'login-page',
  styleUrls: [ './login-page.component.css' ],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

  removeMessageListener: Function;
  elixirLogo = 'assets/img/elixir_logo.png';
  bioExcelLogo = 'assets/img/Bioexcell_logo_1080px_transp-extra-space.png';

  constructor(
    private router: Router,
    private _authService: AuthService,
    public credentialService: CredentialService,
    public tokenService: TokenService,
    renderer: Renderer) {

    // We cache the function "listenGlobal" returns, as it's one that allows to cleanly unregister the event listener
    this.removeMessageListener = renderer.listenGlobal('window', 'message', (event: MessageEvent) => {
      if (!this._authService.canAcceptMessage(event)) {
        console.warn("[LoginPageComponent] received unacceptable message! Ignoring...", event);
        return;
      }
      this._authService.processToken(event.data);
      event.source.close();
      if (tokenService.getToken()) {
        this.router.navigateByUrl('/');
      }
    });
  }

  ssoLink() {
    return this._authService.ssoLink();
  }

  ngOnDestroy() {
    this.removeMessageListener();
  }

}
