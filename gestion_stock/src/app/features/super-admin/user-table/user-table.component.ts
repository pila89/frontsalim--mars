import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'email', 'telephone', 'adresse', 'logo'];
  users!: User [];

  constructor(
    private userService: UserService,
    // private _dialog: MatDialog,
    // private router: Router
  ) {}
  ngOnInit(): void {

    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllUser().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
