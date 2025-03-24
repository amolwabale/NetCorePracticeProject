import { Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { FormsComponent } from './Component/forms/forms.component';
import { LoginComponent } from './Component/login/login.component';
import { authGuard } from './Services/Common/auth.guard';
import { ContainerComponent } from './Component/container/container.component';

export const routes: Routes = [
    { path: '', redirectTo: '/container/dashboard', pathMatch: 'full' },

    {
        path: 'container', component: ContainerComponent, canActivate: [authGuard], children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
            { path: 'forms', component: FormsComponent, canActivate: [authGuard] }
        ]
    },
    { path: 'login', component: LoginComponent }
];


