import { Component, OnChanges, OnInit } from '@angular/core';
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
export class MenuComponent {

  constructor(private router:Router, private MS: MenusvisiService, public state: MenusvisiService){

  }

  public user: string = "Ismael"

  /* public changepropierties(ul: HTMLUListElement): void {
    this.prueba = "ASDAS"
    console.log(this.prueba)
  } */

  public logout(): void {
    this.MS.toggleMenuPrimario()
    this.router.navigate(['home'])
  }

  public toggleMenu(): void {
    this.MS.toggleMenuSecundario()
    console.log(this.MS.mostrarStateMS())
  }

}
