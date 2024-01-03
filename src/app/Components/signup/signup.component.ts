import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ValidacionEmail } from '../../shared/class/validacion-email';
import { ValidacionPassword } from '../../shared/class/validacion-password';
import { LoginService } from '../../shared/service/apirest.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public valor: String = ""

  private URL: string = "https://arnem-dev-sqqc.1.us-1.fl0.io/api/users"

  private arrayUsers: any;

  constructor(private fb: FormBuilder, private c: LoginService) {

  }

  public getValor(input: HTMLInputElement): void {
    this.valor = input.value
  }

  public formularioRegistro = this.fb.group({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, /* ValidacionEmail.regexemail */]),
    /* visible: new FormGroup({
      
    }),*/
    password: new FormControl('', [Validators.required, /*ValidacionPassword.regexpassword */])
    /* base: new FormControl('hexadecimal'),
    potencia: new FormControl('3'),
    largo: new FormControl(true) */
  })

  public borrarTodas() {
    localStorage.clear();
  }

  public insertarn(nombre: string, apellidos: string, email: string, password: string): void {

    if (this.formularioRegistro.valid) {

      this.c.login().subscribe( response => this.arrayUsers = response)

      console.log(this.arrayUsers)

      alert('El formulario es correcto')

        this.c.register(this.URL, 
          {
            "_id": 13,
            "nombre": nombre,
            "apellidos": apellidos,
            "email": email,
            "password": password
          }
        ).subscribe({ complete: () => { alert('Usuario registrado') } })
    }
    else {
      alert('El formulario no es correcto')
    }
  }


}
