import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login = {
    username: '',
    password: '',
  };

  constructor(private shared: SharedService) {}
  user_login() {
    const UserName = JSON.parse(JSON.stringify(this.login.username));
    const PassWord = JSON.parse(JSON.stringify(this.login.password));
    this.shared.Login(UserName, PassWord);
  }
}
