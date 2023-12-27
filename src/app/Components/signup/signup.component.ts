import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public valor: String = ""

  public getValor(input: HTMLInputElement): void {
    this.valor = input.value
  }

  public formularioRegistro = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
    /* base: new FormControl('hexadecimal'),
    potencia: new FormControl('3'),
    largo: new FormControl(true) */
  })

  public borrarTodas() {
    localStorage.clear();
  }
  
  public insertarn(): void {

  }
}
