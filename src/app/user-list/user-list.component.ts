import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface table {
  name: string;
  city: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  user_list: table[] = [
    {
      name: 'Harsh Kumar Rajbhar',
      email: 'hkrajbhar2002@gmail.com',
      phone: '8866128435',
      city: 'Ahmedabad',
    },
  ];

  edit(id: number) {
    console.log('Edit' + ' ' + id);
  }

  dlt(id: number) {
    this.user_list.splice(id, 1);
    console.log(id);
  }
}
