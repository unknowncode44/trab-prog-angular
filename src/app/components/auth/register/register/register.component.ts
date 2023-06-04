import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router'

// formularios reactivos
import { 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  Validators                  } from '@angular/forms';


// servicio de autenticacion  
import { AuthService  } from '../../../../services/auth/auth.service';

// modelos
import { Credentials } from '../../../../shared/models/credentials.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  // formularios reactivos
  registerForm!: FormGroup

  // spinner
  loading: boolean = false

  constructor(

    private auth  : AuthService,
    private router: Router,
    private formsBuilder: FormBuilder,

    ){}
  
  ngOnInit(): void {
    // instanciamos form group pasando los campos que necesitamos
      this.registerForm = this.formsBuilder.group({
        email:          ['', [Validators.required, Validators.email]        ],  // <-- Validamos email
        password:       ['', [Validators.required, Validators.minLength(6)] ],  // <-- Validamos cantidad de caracteres
        repeatPassword: ['', [Validators.required]                          ]   // <-- Validamos cantidad de caracteres
        
      })

      this.registerForm.setValidators(this.passwordMatchValidator);
  }




  onSubmit(){
    let credentials: Credentials = {
    username: this.registerForm.value.email,
    password: this.registerForm.value.password
    }
    this.register(credentials)
  }


  private register(credentials: Credentials){
    this.loading = true
    this.auth.register(credentials).subscribe(
      {
        next: (user) => {
          this.router.navigate(['home'])
        },
        error: (error) => {
          console.error(error)
          this.loading = false
        },
        complete: () => {
          console.info('Usuario Creado');
          this.loading = false
        }
        
      }
    )
  }

  private passwordMatchValidator(control: AbstractControl) : {[key: string] : boolean} | null {
    const password = control.get('password')!;
    const repeatPassword = control.get('repeatPassword')!;

    if(password.value !== repeatPassword.value){
      return { 'passwordMismatch': true }
    }

    return null

  }

  

}

