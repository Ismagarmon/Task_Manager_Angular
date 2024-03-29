import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../shared/service/apirest.service';
import { Usuario } from '../../shared/interface/usuario';
import { MenusvisiService } from '../../shared/service/menusvisi.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  public lista_usuario: Usuario[] = []

  public email: string = ""

  constructor(private users: LoginService, public state: MenusvisiService) {
    this.state.globalEmailVariable.subscribe()
    this.email = this.state.getEmailVariable()
  }

  ngOnInit(): void {
    this.users.getUsers().subscribe((response: Usuario[]) => {this.lista_usuario = response})
  }

  public eliminarusuario(number: string): void  {
    this.users.deleteUser(parseInt(number)).subscribe({
      next: (data) => {
        if(data){
          alert('Usuario Eliminado')
        }
        this.users.getUsers().subscribe((response: Usuario[]) => {this.lista_usuario = response})
      },
      error: error => {
        error.errorMessage = error.message;
        console.error('There was an error!', error);
    }
    })
  }

}
