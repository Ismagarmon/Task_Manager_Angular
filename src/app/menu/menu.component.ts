import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MenusvisiService } from '../shared/service/menusvisi.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnChanges{

  constructor(private router:Router, public state: MenusvisiService){
  }

  public user: string = ""

  private getUserName(): void {
    const jsonstorage = sessionStorage.getItem('Usuario')
    const user = JSON.parse(jsonstorage!)
    this.user = user.nombre
  }

  ngOnChanges(): void {
    if(this.state.mostrarMenuPrimario()){
      this.getUserName()
    }
    
    console.log('Cambio')
  }

  public logout(): void {
    this.state.toggleMenuPrimario()
    sessionStorage.clear()
    this.router.navigate(['home'])
  }

  public toggleMenu(): void {
    this.state.mostrarMenuSecundario()
  }

}
