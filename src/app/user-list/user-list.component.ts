import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SharedService, UserList } from '../services/shared.service';
import { FormsModule } from '@angular/forms';

interface table {
  name: string;
  city: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  user_list: UserList[] = [];

  constructor(private shared: SharedService) {
    this.user_list = this.shared.C_User;
  }

  edit(id: number) {
    console.log('Edit' + ' ' + id);

    this.shared.EditList(id, this.user_list[id]);
  }

  dlt(id: number) {
    this.shared.DeleteUserToList(id);
    console.log(id);
  }
}
