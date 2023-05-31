import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/auth/login/login/login.component';
import { RegisterComponent } from '../../components/auth/register/register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login',    component: LoginComponent     },
      { path: 'register', component: RegisterComponent  }
    ])
  ]
})
export class AuthModule { }
