import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  showNavigation = true;
  constructor(private router: Router) {}

  onLogout(){
    localStorage.removeItem("auth-token");
    this.router.navigate(['/login']);
    this.showNavigation = false
  }
}
