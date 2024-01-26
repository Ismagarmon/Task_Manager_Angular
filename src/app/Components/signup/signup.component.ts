import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ValidacionesInputs } from '../../shared/class/validaciones-inputs';
import { LoginService } from '../../shared/service/apirest.service'
import { Router } from '@angular/router';
import { Usuario } from '../../shared/interface/usuario';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public valor: String = ""

  private lista_usuario: Usuario[] = []

  private id_u: number = 0

  constructor(private fb: FormBuilder, private regsiter: LoginService, private router:Router) {

  }

  public getValor(input: HTMLInputElement): void {
    this.valor = input.value
  }

  public formularioRegistro = this.fb.group({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4), ValidacionesInputs.onlywords]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(5), ValidacionesInputs.onlywords]),
    email: new FormControl('', [Validators.required, ValidacionesInputs.regexemail]),
    password: new FormControl('', [Validators.required, ValidacionesInputs.regexpassword]),
    /* base: new FormControl('hexadecimal'),
    potencia: new FormControl('3'),*/
    largo: new FormControl(true) 
  })

  public borrarTodas() {
    localStorage.clear();
  }

  public insertarn(nombre: string, apellidos: string, email: string, password: string): void {

    if (this.formularioRegistro.valid) {

      alert('El formulario es correcto')

      this.regsiter.getUsers().subscribe((response: Usuario[]) => {this.lista_usuario = response; console.log(this.lista_usuario)})

      this.id_u = this.lista_usuario[this.lista_usuario.length - 1]._id
      this.id_u++

      const user: Usuario = {
        _id: this.id_u,
        apellidos: apellidos,
        email: email,
        nombre: nombre,
        password_nc: password,
        puntuacion: 0,
        img: ''
      }

      this.regsiter.register(
        user
      ).subscribe({
        next: (data) => {
          alert(data.toString())
        },

        complete: () => { alert('Usuario registrado'); this.router.navigate(['signin']) },

        error: (error) => {
          if (error.status) {
            alert('Error del servidor. Código de estado: ' + error.status + ', puede ser porque ya haya un correo como el tuyo');
          } else {
            alert(error);
          }
        }
      })
    }
    else {
      alert('El formulario no es correcto')
    }
  }
}
