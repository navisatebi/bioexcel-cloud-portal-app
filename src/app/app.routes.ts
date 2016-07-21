import { RouterConfig } from '@angular/router';
import { ProfilePage } from './pages/profile-page';
import { ErrorPage } from './pages/error-page';
import { LoginPage } from './pages/login-page';
import { WelcomePage } from './pages/welcome-page';

export const routes: RouterConfig = [
    { path: '', component: WelcomePage },
    { path: 'profile', component: ProfilePage },
    { path: 'error', component: ErrorPage },
    { path: 'login', component: LoginPage },
    { path: '**', component: ProfilePage },
];