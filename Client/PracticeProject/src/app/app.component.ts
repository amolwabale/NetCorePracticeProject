import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { LoaderComponent } from './Component/common/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoaderComponent],
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
