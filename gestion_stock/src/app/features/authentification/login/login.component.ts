import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastServiceService } from 'src/app/shared/components/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private toastServiceService:ToastServiceService ) {}
  public loginForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  submit() {
    console.log(this.loginForm.value);
    if (
      this.loginForm.value.email == 'superadmin' &&
      this.loginForm.value.password == 'superadmin'
    ) {

      this.router.navigate(['/super-admin/list-user']);
    } else if (
      this.loginForm.value.email == 'admin' &&
      this.loginForm.value.password == 'admin'
    ) {
      this.router.navigate(['/admin/list-fournisseurs']);
      this.toastServiceService.openSnackBar("okk")
    }else{
      console.log("login , password erronee");

    }
  }
}
