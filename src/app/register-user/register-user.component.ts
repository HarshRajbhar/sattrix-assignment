import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface table {
  name: string;
  city: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent {
  reg_User: table = {
    name: '',
    email: '',
    phone: '',
    city: '',
  };
  submit() {
    if (
      this.reg_User.name.trim() !== '' &&
      this.reg_User.email.trim() !== '' &&
      this.reg_User.phone.trim() !== '' &&
      this.reg_User.city.trim() !== ''
    ) {
      console.log(this.reg_User);
    }
  }
}
