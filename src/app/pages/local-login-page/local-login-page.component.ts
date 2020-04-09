import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { CredentialService, TokenService,
  AuthService, ErrorService } from 'ng2-cloud-portal-service-lib';

@Component({
  selector: 'local-login-page',
  styleUrls: [ './local-login-page.component.css' ],
  templateUrl: './local-login-page.component.html'
})
export class LocalLoginPageComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    public credentialService: CredentialService,
    public tokenService: TokenService,
    public errorService: ErrorService
    ) {

  }

  getErrorMessage(): any{0
    return this.errorService.getCurrentError();
  }

  public authenticate(username: string, password: string): any {
    this.errorService.setCurrentError('');
    this.authService.authenticateBasic(username,password).subscribe(
      token => {
        console.log('[LocalaccountPage] Obtained token %O', token);
        this.authService.processToken(token.token);
        if (this.tokenService.getToken()) {
          this.router.navigateByUrl('/');
        }
      },
      error => {
        console.log('[LocalaccountPage] Got error %O', error);
        this.errorService.setCurrentError('Wrong username/password');
      },
      () => {}
    );
  }

  ngOnDestroy() {
  }

}
