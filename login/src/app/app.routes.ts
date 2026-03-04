import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { RouterPath } from './core/router-paths';

export const routes: Routes = [
  { path: '', redirectTo: RouterPath.Pages.LOGIN, pathMatch: 'full' },
  { path: RouterPath.Pages.LOGIN, component: Login },
  { path: RouterPath.Pages.HOME, component: Home },
];
