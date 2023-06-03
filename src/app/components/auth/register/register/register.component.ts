import { Component, OnInit    } from '@angular/core';
import { Router               } from '@angular/router'

// formularios reactivos
import { 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  Validators                  } from '@angular/forms';

// servicio de autenticacion  
import { AuthService  } from '../../../../services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  // formularios reactivos
  registerForm!: FormGroup

  constructor(

    private auth  : AuthService,
    private router: Router,
    private formsBuilder: FormBuilder 

    ){}
  
  ngOnInit(): void {
    // instanciamos form group pasando los campos que necesitamos
      this.registerForm = this.formsBuilder.group({
        email:          ['', [Validators.required, Validators.email]        ],  // <-- Validamos email
        password:       ['', [Validators.required, Validators.minLength(6)] ],  // <-- Validamos cantidad de caracteres
        repeatPassword: ['', [Validators.required, Validators.minLength(6)] ]   // <-- Validamos cantidad de caracteres
        
      })
  }


  onSubmit(){}

  register(){
    this.auth.register({username: '', password: ''}).subscribe(
      {
        next: (user) => {
          console.log(user)
          
        },
        error: (error) => console.error(error),
        complete: () => console.info('Usuario Creado')
        
      }
    )
  }

  passwordCompare(c: AbstractControl ): { invalid: boolean} {
    if(c.get('password')!.value !== c.get('repeatPassword')!.value) {
      return {invalid: true };
    }
    else {
      return {invalid: false}
    }
  }

  

}

