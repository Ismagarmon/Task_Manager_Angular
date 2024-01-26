import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterLink, Router } from '@angular/router'
import { MenusvisiService } from '../../shared/service/menusvisi.service'

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {

  constructor(public state: MenusvisiService){
  }

  public toggleMenu(): void {
    this.state.toggleMenuSecundario()
  }

}
