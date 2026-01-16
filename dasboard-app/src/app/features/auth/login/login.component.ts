import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router){}
  login(): void {
    const success = this.auth.login(this.username, this.password);
    if(success){
      this.router.navigate(['/dashboard']);
    }
    else {
      this.error = 'Invalid Credentials';
    }
  }
}
