import { Component, OnInit, AfterViewInit     } from '@angular/core';
import { Router                               } from '@angular/router'

// formularios reactivos
import { 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  Validators                  } from '@angular/forms';

// operadores rxjs
import { delay } from 'rxjs';

// servicio de autenticacion  
import { AuthService  } from '../../../../services/auth/auth.service';
// servicio de loading
import { LoadingService } from '../../../../shared/services/loading.service';
import { Credentials } from 'src/app/shared/models/credentials.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit{

  // formularios reactivos
  registerForm!: FormGroup

  // spinner
  loading:boolean = false

  constructor(

    private auth  : AuthService,
    private router: Router,
    private formsBuilder: FormBuilder,
    private _loading: LoadingService 

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

  ngAfterViewInit(): void {
      this._loading.httpProgress().subscribe((status: boolean) => {
        this.loading = status
      })
  }


  onSubmit(){
    let credentials: Credentials = {
    username: this.registerForm.value.email,
    password: this.registerForm.value.password
    }
    console.info(credentials)
    this.register(credentials)

  }


  register(credentials: Credentials){
    this.loading = true
    this.auth.register(credentials).subscribe(
      {
        next: (user) => {
          console.log(user)
          
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

  passwordMatchValidator(control: AbstractControl) : {[key: string] : boolean} | null {
    const password = control.get('password')!;
    const repeatPassword = control.get('repeatPassword')!;

    if(password.value !== repeatPassword.value){
      return { 'passwordMismatch': true }
    }

    return null

  }

  

}

