import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterLink } from '@angular/router'


@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {

  public hidden: Boolean = false

  constructor(){
    localStorage.setItem("componentes", JSON.stringify({ oculto: this.hidden }))

  }

  public change(ul: HTMLUListElement): void {
    ul.style.display = 'none'
  }

}
