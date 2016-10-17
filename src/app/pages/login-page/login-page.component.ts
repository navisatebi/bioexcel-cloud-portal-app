import { Component, Renderer } from '@angular/core';
import { LoginComponent } from 'ng2-cloud-portal-presentation-lib';
import { CredentialService, TokenService, AuthService, JwtToken } from 'ng2-cloud-portal-service-lib';
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'login-page',
  directives: [ LoginComponent ],
  providers: [ AuthService, TokenService, CredentialService ],
  styles: [require('./login-page.style.css')],
  template: require('./login-page.template.html')
})
export class LoginPage {

  removeMessageListener: Function;

  constructor(
    private _authService: AuthService,
    public credentialService: CredentialService,
    public tokenService: TokenService,
    renderer: Renderer) {

    // We cache the function "listenGlobal" returns, as it's one that allows to cleanly unregister the event listener
    this.removeMessageListener = renderer.listenGlobal('window', 'message', (event: MessageEvent) => {
      if (!this._authService.canAcceptMessage(event)) {
        console.warn("received unacceptable message! Ignoring...", event);
        return;
      }
      this.saveToken(event.data);
      event.source.close();
    });
  }

  private saveToken(jwt: string) {
    console.log('[LoginPage] Obtained token from saml %O', jwt);
    let theToken: JwtToken = <JwtToken>{ token: jwt };
    this.tokenService.setToken(theToken);
    let tokenClaims = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(jwt.split(".")[1]));
    this.credentialService.setCredentials(tokenClaims.sub, null);
  }

  ngOnDestroy() {
    this.removeMessageListener();
  }

}
