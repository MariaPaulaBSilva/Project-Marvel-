import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  
  private validEmail: string = 'user@example.com';
  private validPassword: string = 'password123';

  constructor(private router: Router) { }

  onLogin() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      this.router.navigate(['./app.component.card.html']);
    } else {
      this.errorMessage = 'Credenciais inválidas. Tente novamente!';
    }
  }
}
