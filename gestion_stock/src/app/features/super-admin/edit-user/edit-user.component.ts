import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  private idUser: any;
  public data: any;
  public isREcupereded: boolean = false;
  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.idUser = paramMap.get('id');
      this.userService.getUserById(this.idUser).subscribe((data) => {
        this.isREcupereded = true;
        this.data = data;
        this.createUserForm();
      });
      console.log(this.idUser);
    });
  }
  createUserForm() {
    this.userForm = new FormGroup({
      nom: new FormControl(this.data.nom),
      email: new FormControl(this.data.email),
      telephone: new FormControl(this.data.telephone),
      adresse: new FormControl(this.data.adresse),
      logo: new FormControl(this.data.logo),
      role: new FormControl(this.data.role.role),

    });
  }
  editUser() {
    const data = {
      ...this.userForm.value,
      ...{
        role: {
          role: this.userForm.value.role,
        },
      },
      ...{
        idUser: this.idUser
      }
    };

    this.userService.updateUser(data).subscribe(() => {
      this.router.navigate(['/super-admin/list-user']);
    });
  }
  cancel() {
    this.router.navigate(['/super-admin/list-user']);
  }
  // isAppered(){
  //   this.isREcupereded == false ?this.isREcupereded =true:this.isREcupereded =false
  // }
}
