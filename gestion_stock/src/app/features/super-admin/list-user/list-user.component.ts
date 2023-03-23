import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  public users: User[] = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.userService.getAllUser().subscribe((data) => {
      this.users = data;
    });
  }
  updateUser(idUser: any) {
    this.router.navigate([`super-admin/edit-user/${idUser}`]);
  }
  deleteUser(idUser: any) {
    console.log(idUser);

    this.userService.deleteUserById(idUser).subscribe(() => {

    });
    this.userService.getAllUser().subscribe((data) => {
      this.users = data;
     })
     ;
  }

  // this.load();
  // load() {
  //   this.userService.getAllUser().subscribe((data) => {
  //     this.users = data;
  //   });
  // }

  //addUser() {
  //     this.router.navigate(['/super-admin/add-user']);
  //   }
  //   editUser(idUser:number|undefined){
  //     this.router.navigate([`/super-admin/edit-user/${idUser}`])
  //   }
  //   deleteUser(user:any){
  // this.userService.deleteUserById(user.idUser).subscribe(()=>
  //   this.userService.getAllUser().subscribe(data=>{
  //     this.users=data;
  //   })
  // )

  //
}
