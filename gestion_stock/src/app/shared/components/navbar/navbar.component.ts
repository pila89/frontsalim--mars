import { UserService } from 'src/app/shared/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() menuList:any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  logout() {

    this.router.navigate(['/authentifcation/login']);
  }
}
