import { RouterConfig } from '@angular/router';
import { ProfilePage } from './pages/profile-page';
import { ErrorPage } from './pages/error-page';
import { LoginPage } from './pages/login-page';
import { WelcomePage } from './pages/welcome-page';
import { RepositoryPage } from './pages/repository-page';
import { DeploymentsPage } from './pages/deployments-page';
import { VolumesPage } from './pages/volumes-page';

export const routes: RouterConfig = [
    { path: '', component: WelcomePage },
    { path: 'profile', component: ProfilePage },
    { path: 'error', component: ErrorPage },
    { path: 'login', component: LoginPage },
    { path: 'repository', component: RepositoryPage },
    { path: 'deployments', component: DeploymentsPage },
    { path: 'volumes', component: VolumesPage },
    { path: '**', component: ProfilePage },
];