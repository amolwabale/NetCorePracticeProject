import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 
  const isAuthenticated = !!localStorage.getItem('auth-token'); // Example: Check for token in localStorage

  if (isAuthenticated) {
    return true; // Allow access
  } else {
    console.log('User is not authenticated');
    router.navigate(['/login']);
    return false; // Deny access
  }
};
