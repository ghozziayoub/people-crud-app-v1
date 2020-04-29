import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private router:Router,
    private toastr: ToastrService
    ) {

    let formControls = {
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      phone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      repassword: new FormControl('',[
        Validators.required,
      ])
    }

    this.registerForm = this.fb.group(formControls)
  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get phone() { return this.registerForm.get('phone') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }


  ngOnInit(): void {

    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/people-list']);
    } 
  }

  register() {

    let data = this.registerForm.value;

    let user = new User(data.firstname,data.lastname,data.email,data.phone,data.password);

    this.userService.registerAdmin(user).subscribe(
      res=>{
        this.toastr.success(res.message);
        this.router.navigate(['/login']);
      },
      err=>{
        console.log(err);
      }
    )
    
  }

}
