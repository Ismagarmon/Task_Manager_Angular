import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { ValidacionesInputs } from '../../shared/class/validaciones-inputs'
import { LoginService } from '../../shared/service/apirest.service'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private router:Router,private fb: FormBuilder, private login: LoginService){

  }

  public formularioLogIn = this.fb.group({
    email: new FormControl('', [Validators.required, ValidacionesInputs.regexemail]),
    password: new FormControl('', [Validators.required, ValidacionesInputs.regexpassword]), 
  })

  public entrar(email: string, password: string): void {
    let email_value = email
    let pw_value = password
  }
}
