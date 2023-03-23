// import { ActivatedRoute, Router } from '@angular/router';

// import { FormControl, FormGroup } from '@angular/forms';
// import { UserService } from 'src/app/zshared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent implements OnInit {

  constructor(

  ) {}

  ngOnInit(): void {

  }

 }


// public userForm!: FormGroup;
//   public isLoaded:boolean=false;


//   private userService: UserService,
//     private router: Router,
//     private activatedRoute: ActivatedRoute

//     this.router.url;
//     if (this.router.url.includes('add-user')) {
//       this.initForm();
//     } else {
//       console.log(this.activatedRoute.snapshot.params['id']);

//       this.userService
//         .getUserById(this.activatedRoute.snapshot.params['id'])

//         .subscribe((data) => {
//           this.initForm(data);
//           this.isLoaded = true;

//         });
//     }

//     console.log(this.router.url);


//     initForm(user?: any) {
//       this.userForm = new FormGroup({
//         nom: new FormControl(user ? user.nom : ''),
//         email: new FormControl(user ? user.email : ''),
//         telephone: new FormControl(user ? user.telephone : ''),
//         adresse: new FormControl(user ? user.adresse : ''),
//         logo: new FormControl(user ? user.logo : ''),
//         role: new FormControl(user ? "salim": ''),
//       });
//     }
//     confirmer() {
//       console.log(this.userForm.value);
//       const data = {
//         ...this.userForm.value,
//         ...{
//           role: {
//             role: this.userForm.value.role,
//           },

//         },
//       };
//   if(this.router.url.includes('add-user')){
//     this.userService.addUser(data).subscribe((data) => {
//       this.router.navigate(['/super-admin/list-user']);
//     });
//   }else{
//     this.userService.updateUser(data).subscribe((data) => {
//       this.router.navigate(['/super-admin/list-user']);
//     });


//   }}
