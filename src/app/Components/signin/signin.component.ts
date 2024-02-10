import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { LoginService } from '../../shared/service/apirest.service'
import { SignInUser } from '../../shared/interface/sign-in-user'
import { MenusvisiService } from '../../shared/service/menusvisi.service'
import { Usuario } from '../../shared/interface/usuario'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  public IsMatchEmail: boolean = false

  public IsMatchPW: boolean = false

  public IEmail: string = ""

  public IPassWord: string = ""

  constructor(private router:Router, private login: LoginService, public state: MenusvisiService){

  }

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

  public comprobarPW(): void {

    const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/

    if(regexpassword.test(this.IPassWord)){
      this.IsMatchPW = true
    } else {
      this.IsMatchPW = false
    }
  }

  public comprobarEmail(): void {

    const regexcorreo = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]{1,30}@gmail\.com$/
    const regexcorreo1 = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]{1,30}@hotmail\.com$/
    const regexcorreo2 = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]{1,30}@yahoo\.es$/

    if(regexcorreo.test(this.IEmail) || regexcorreo1.test(this.IEmail) || regexcorreo2.test(this.IEmail)){
      this.IsMatchEmail = true
    } else {
      this.IsMatchEmail = false
    }
  }
}
