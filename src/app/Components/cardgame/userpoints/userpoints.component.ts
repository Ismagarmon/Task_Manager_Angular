import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../shared/interface/usuario';
import { LoginService } from '../../../shared/service/apirest.service';

@Component({
  selector: 'app-userpoints',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userpoints.component.html',
  styleUrl: './userpoints.component.css'
})
export class UserpointsComponent implements OnInit {

  public lista_usuario: Usuario[] = []

  constructor(private users: LoginService) {}

  ngOnInit(): void {
    this.users.getUsers().subscribe((response: Usuario[]) => {this.lista_usuario = response})
  }

  public cambiarcolortabla(): void {
    if(document.getElementById('table')){
      document.getElementById('table')!.style.border = '2px solid black'
      document.getElementById('table')!.style.borderRadius = '10px'
    }
  }
}
