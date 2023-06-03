import { NgModule             } from '@angular/core';
import { CommonModule         } from '@angular/common';
import { RouterModule         } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms'
import { HttpClientModule     } from '@angular/common/http';

// componentes del modulo
import { LoginComponent     } from '../../components/auth/login/login/login.component';
import { RegisterComponent  } from '../../components/auth/register/register/register.component';

// servicios del modulo
import { AuthService    } from '../../services/auth/auth.service';
import { LoadingService } from '../../shared/services/loading.service';



@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login',    component: LoginComponent     },
      { path: 'register', component: RegisterComponent  }
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [
    AuthService, 
  ]
})
export class AuthModule { }
