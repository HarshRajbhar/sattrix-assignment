import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export type RegisteredUser = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

export interface UserList {
  name: string;
  city: string;
  email: string;
  phone: string;
}

const REGISTERED_USER_KEY = 'RegisteredUserData';
const USER_LIST_KEY = 'UserListKey';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  RegisterdUsers: RegisteredUser[] = [];
  C_User: UserList[] = [];
  private _loggenInUsername!: string;
  public get loggenInUsername(): string {
    return this._loggenInUsername;
  }
  public set loggenInUsername(value: string) {
    this._loggenInUsername = value;
  }
  constructor(private router: Router) {
    const users = sessionStorage.getItem(REGISTERED_USER_KEY);
    if (users && users !== null) {
      this.RegisterdUsers = JSON.parse(users);
    }
  }

  RegisterUser(new_user: RegisteredUser) {
    if (
      this.RegisterdUsers.findIndex(
        ({ username, email }) =>
          username === new_user.username || email === new_user.email
      ) > -1
    ) {
      // throw error User Duplicate
      Swal.fire('Error', 'User Already Register', 'error');
    } else {
      this.RegisterdUsers.push(JSON.parse(JSON.stringify(new_user)));
      Swal.fire('Success', 'User Login Successfully', 'success');
      this.SaveRegisteredUser();
    }
  }
  Login(userName: string, passWord: string) {
    if (
      this.RegisterdUsers.findIndex(
        ({ username, password }) =>
          username === userName && password === passWord
      ) > -1
    ) {
      // Success
      this.loggenInUsername = userName;
      this.GetListForUser();

      Swal.fire('Success', 'User Login Successfully', 'success');
      this.router.navigateByUrl('/dashboard');
      // Store User ID
      // ChangeStatus Login true
    } else {
      console.log('ldfknkj');

      // throw error User Not Found or Invalid password
      // throw
    }
  }

  AddUserToList(u: UserList) {
    this.C_User.push(u);
    console.log(this.loggenInUsername);

    this.SaveList();
    console.log(this.loggenInUsername);
  }
  DeleteUserToList(index: number) {
    this.C_User.splice(index, 1);
    this.SaveList();
  }
  EditList(index: number, data: UserList) {
    this.C_User[index] = data;

    this.SaveList();
  }

  private GetListForUser() {
    const list = sessionStorage.getItem(
      `${USER_LIST_KEY}/${this.loggenInUsername}`
    );
    if (list && list !== null) {
      this.C_User = JSON.parse(list);
    } else {
      this.C_User = [];
    }
  }

  private SaveList() {
    sessionStorage.setItem(
      `${USER_LIST_KEY}/${this.loggenInUsername}`,
      JSON.stringify(this.C_User)
    );
  }
  private SaveRegisteredUser() {
    sessionStorage.setItem(
      REGISTERED_USER_KEY,
      JSON.stringify(this.RegisterdUsers)
    );
  }
}
