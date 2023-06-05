import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Credentials } from 'src/app/shared/models/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  loading: boolean = false;

  constructor(
    private auth : AuthService, private router: Router, private formsBuilder : FormBuilder){}

  ngOnInit(): void{
    this.loginForm = this.formsBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
    let credentials: Credentials = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.login(credentials)
  }

  private login(credentials : Credentials){
    this.loading = true
    this.auth.login(credentials).subscribe({
      next: (user)=>{
        this.router.navigate(['tareas'])
      },
      error: (error) =>{
        console.log(error)
        this.loading = false
      }
    })
  }

}
