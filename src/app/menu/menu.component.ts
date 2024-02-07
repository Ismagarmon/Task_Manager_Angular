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
export class MenuComponent {

  public user: string = ""

  constructor(private router:Router, public state: MenusvisiService){
    this.state.globalNameVariable.subscribe( (value) => {
      if (this.user !== value) {
          this.user = this.state.getNameVariable()
      }
    })
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
