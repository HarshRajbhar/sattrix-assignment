import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisteredUser, SharedService } from '../services/shared.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  reg_User: RegisteredUser = {
    username: '',
    password: '',
    confirm_password: '',
    email: '',
  };
  constructor(private shared: SharedService) {}

  register() {
    // this.shared.RegisterdUsers.push(this.reg_User);

    this.shared.RegisterUser(this.reg_User)
    console.log(this.reg_User);
    // sessionStorage.setItem('User', JSON.stringify(this.shared.RegisterdUsers));
    this.reg_User.username = '';
    this.reg_User.email = '';
    this.reg_User.password = '';
    this.reg_User.confirm_password = '';
  }
}
