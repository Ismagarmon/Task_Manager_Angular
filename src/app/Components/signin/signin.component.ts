import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { ValidacionesInputs } from '../../shared/class/validaciones-inputs'
import { LoginService } from '../../shared/service/apirest.service'
import { SignInUser } from '../../shared/interface/sign-in-user'
import { MenusvisiService } from '../../shared/service/menusvisi.service'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private router:Router,private fb: FormBuilder, private login: LoginService, public state: MenusvisiService){

  }

  public formularioLogIn = this.fb.group({
    email: new FormControl('', [Validators.required, ValidacionesInputs.regexemail]),
    password: new FormControl('', [Validators.required, ValidacionesInputs.regexpassword]), 
  })

  public entrar(email: string, password: string): void {

    const log: SignInUser = {
      email: email,
      password: password
    }

    this.login.SignIn(log).subscribe(
      {
        next: (data) => {
          if(data.Message){
            alert('Usuario correcto'); 
            this.state.toggleMenuPrimario() 
            this.router.navigate(['profile'])
            this.getUserToSesionStorage(email)
          }
        },

        error: (error) => {
          alert('Contraseña o correo incorrecto')
        }
      }
    )
  }

  private getUserToSesionStorage(email: string ): void {
    this.login.findEmail(email).subscribe(
      {
        next: (data) => {
          sessionStorage.setItem('Usuario', JSON.stringify(data))
        }
      }
    )
  }
}
