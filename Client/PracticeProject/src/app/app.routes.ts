import { Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { FormsComponent } from './Component/forms/forms.component';
import { LoginComponent } from './Component/login/login.component';
import { authGuard } from './Services/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'forms', component: FormsComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent }
  ];


