import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}
  public registerForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerForm = new FormGroup({
      nom: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      telephone: new FormControl(''),
    });
  }
  submit(){
    this.router.navigate(['/super-admin/list-user']);
  }
}
