import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDeleteComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public userForm?: FormGroup;
  public dialog!: MatDialog;
  public users: User[] = [];

  constructor(
    private _userService: UserService,
    private _httpClient: HttpClient,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit(): void {}

  addUser(user:User) {
    this._userService.addUser(user).subscribe(()=>{

    })
  }
  deleteUser(idUser:number) {
    let dialogRef = this.dialog.open(ConfirmationDeleteComponent, {
      height: '195px',
      panelClass: 'custom-modalbox'
    });
    dialogRef.afterClosed().subscribe(()=>{
          this._userService.deleteUserById(idUser).subscribe(() => {})
        });
        this._userService.getAllUser().subscribe((data) => {
          this.users = data;
         })}
         ;
                    // this.toastService.openSnackBar(TOSAT.CREATE_USER_SUCCESS)
  

  editUser() {}

};
