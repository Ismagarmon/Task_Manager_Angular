import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { ValidacionesInputs } from '../../shared/class/validaciones-inputs'
import { LoginService } from '../../shared/service/apirest.service'
import { SignInUser } from '../../shared/interface/sign-in-user'
import { MenusvisiService } from '../../shared/service/menusvisi.service'
import { Usuario } from '../../shared/interface/usuario'

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
        next: async (data) => {
          if(data.Message){
            alert('Usuario correcto')
            await this.getUserToSesionStorage(email)
            this.state.toggleMenuPrimario()
            
            setTimeout(() => {
              this.router.navigate(['profile'])
            },100)
            
          }
        },

        error: (error) => {
          alert('Contraseña o correo incorrecto')
        }
      }
    )
  }

  private getUserToSesionStorage(email: string ): void {
    this.login.findEmail(email).subscribe( (user: Usuario) => {
      this.state.globalNameVariable.subscribe()
      this.state.setNameVariable(user.nombre)
      this.state.globalEmailVariable.subscribe()
      this.state.setEmailVariable(user.email)
      this.state.globalPuntuacionVariable.subscribe()
      this.state.setPuntuacionVariable(user.puntuacion)
      this.state.globalIDVariable.subscribe()
      this.state.setIDVariable(user._id)
    })
  }
}
