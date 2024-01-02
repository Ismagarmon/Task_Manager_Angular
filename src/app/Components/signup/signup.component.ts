import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ValidacionEmail } from '../../shared/class/validacion-email';
import { ValidacionPassword } from '../../shared/class/validacion-password';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public valor: String = ""

  constructor(private fb: FormBuilder) {

  }

  public getValor(input: HTMLInputElement): void {
    this.valor = input.value
  }

  public formularioRegistro = this.fb.group({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, ValidacionEmail.regexemail]),
    /* visible: new FormGroup({
      
    }),*/
    password: new FormControl('', [Validators.required, ValidacionPassword.regexpassword])
    /* base: new FormControl('hexadecimal'),
    potencia: new FormControl('3'),
    largo: new FormControl(true) */
  })

  public borrarTodas() {
    localStorage.clear();
  }

  public insertarn(): void {
    if (this.formularioRegistro.valid){
      alert('El formulario es correcto')
    }
    else {
      alert('El formulario no es correcto')
    }
  }

  
}
