import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[LoginService]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    // Initialize the form group with validation
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]], // Username must be required and have a minimum length of 3
      password: ['', [Validators.required, Validators.minLength(6)]]  // Password must be required and have a minimum length of 6
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // console.log('Form Submitted', username, password);
      // localStorage.setItem("auth-token",username);
      // this.router.navigate(['/']);


      const credentials = { UserName: username, Password: password };
      this.loginService.loginUser(credentials).subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem("auth-token",response.jwt);
          this.router.navigate(['/']);
        },
        error: (error) => {
          // Handle error response
          console.error('Login failed', error);
        }
      });


    }
  }


}
