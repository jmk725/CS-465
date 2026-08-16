import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  formError = '';

  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}

  public onLoginSubmit(): void {
    this.formError = '';

    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'Email and password are required.';
      return;
    }

    this.authenticationService.login(
      this.credentials.email,
      this.credentials.password
    ).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {
        this.formError = 'Login failed. Check your email and password.';
      }
    });
  }
}
