import { User } from './../../zshared/models/user.model';
import { UserService } from './../../zshared/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public users: User[] = [];
  public userForm?: FormGroup<any> | any;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.createUserForm();
  }
  createUserForm() {
    this.userForm = new FormGroup({
      nom: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
      adresse: new FormControl(''),
      logo: new FormControl(''),
      role: new FormControl(''),
    });
  }
  addUser() {
    const data = {
      ...this.userForm.value,
      ...{
        role: {
          role: this.userForm.value.role,
        },
      },
    };
    console.log(data);

    this.userService.addUser(data).subscribe((data) => {
      this.router.navigate(['/super-admin/list-user']);
    });
  }
  cancel() {
    this.router.navigate(['/super-admin/list-user']);
  }
}
