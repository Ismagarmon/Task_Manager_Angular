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

  public listanombres: String[] = []

  nombres = new FormControl()

  constructor() {
    this.listanombres = []
    
  }

  public formularioRegistro = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  public borrarTodas() {
    localStorage.clear();
    this.listanombres = [];
  }

  public insertarn(): void {
    this.listanombres.push(this.nombres.value)
    this.nombres.setValue('')
    localStorage.setItem('nombres', JSON.stringify(this.listanombres))
  }
}
