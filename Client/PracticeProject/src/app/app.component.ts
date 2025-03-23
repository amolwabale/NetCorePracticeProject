import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { Router } from '@angular/router';
import { ContainerComponent } from './Component/container/container.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticeProject';
  isAuthenticated = false;

  constructor(private router: Router) {
    
    this.isAuthenticated = !!localStorage.getItem('auth-token');
  }

  onLogout(){
    localStorage.removeItem("auth-token");
    this.router.navigate(['/login']);
  }
}
