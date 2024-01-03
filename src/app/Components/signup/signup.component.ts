import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ValidacionesInputs } from '../../shared/class/validaciones-inputs';
import { LoginService } from '../../shared/service/apirest.service'
import { Router } from '@angular/router';

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

  private arrayUsers: any

  private l_id: number = 0

  constructor(private fb: FormBuilder, private c: LoginService, private router:Router) {

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

      this.c.login().subscribe(response => this.l_id = response[response.length - 1]._id)

      this.l_id++

      this.c.register(this.URL,
        { "_id": this.l_id, "nombre": nombre, "apellidos": apellidos, "email": email, "password": password }
      ).subscribe({

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
