import { UserService } from 'src/app/shared/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() menuList:any;

  constructor(private userService: UserService, private router: Router,public dialog: MatDialog) { }
  showFiller = false;

  ngOnInit(): void {

  }

  hi(){
    // this.dialog.open(DialogDataExampleDialog, {
    //   data: {
    //     animal: 'panda',
    //   },
    // });
  }
  redirect(){
this.router.navigate(['super-admin/list-user'])
  }
  // logout() {

  //   this.router.navigate(['/authentifcation/login']);
  // }
}
