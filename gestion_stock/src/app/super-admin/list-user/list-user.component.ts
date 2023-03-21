import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  public users: User[]=[];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.userService.getAllUser().subscribe((data) => {
      this.users = data;
    });
  }

  addUser() {
    this.router.navigate(['/super-admin/add-user']);
  }
  editUser(idUser:number|undefined){
    this.router.navigate([`/super-admin/edit-user/${idUser}`])
  }
  deleteUser(user:any){
this.userService.deleteUserById(user.idUser).subscribe(()=>
  this.userService.getAllUser().subscribe(data=>{
    this.users=data;
  })
)

  }
}
