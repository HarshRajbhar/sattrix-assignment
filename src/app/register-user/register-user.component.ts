import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { SharedService } from '../services/shared.service';

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

  User_List_data: table[] = [];
  constructor(private shared: SharedService) {}

  submit() {
    if (
      this.reg_User.name.trim() !== '' &&
      this.reg_User.email.trim() !== '' &&
      this.reg_User.phone.trim() !== '' &&
      this.reg_User.city.trim() !== ''
    ) {
      console.log(this.reg_User);
      // this.User_List_data.push({
      //   name: this.reg_User.name,
      //   email: this.reg_User.email,
      //   phone: this.reg_User.phone,
      //   city: this.reg_User.city,
      // });
      // sessionStorage.setItem('User_List',);
      this.shared.AddUserToList(JSON.parse(JSON.stringify(this.reg_User)));
      Swal.fire('Success', 'User Registered Successfully', 'success');
      this.reg_User.name = '';
      this.reg_User.email = '';
      this.reg_User.phone = '';
      this.reg_User.city = '';
    }
  }
}
