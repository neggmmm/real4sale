import { Component } from "@angular/core";
import { AuthService } from "../../core/auth/auth.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        console.log('Logged in');
      },
      error: err => {
        console.error(err);
      }
    });
  }
}