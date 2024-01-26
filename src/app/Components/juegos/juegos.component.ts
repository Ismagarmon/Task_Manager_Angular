import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterLink, Router } from '@angular/router'
import { MenusvisiService } from '../../shared/service/menusvisi.service'
import { filter, take } from 'rxjs/operators'
import { NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent implements OnInit, OnDestroy{

  public hidden: Boolean = false
  private navigationSubscription: any

  constructor(public state: MenusvisiService, private router: Router){
  }
  
  ngOnInit(): void {
    this.navigationSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Restablecer el estado del menú a "visible" cuando se carga la vista de "Juegos"
      this.state.mostrarMenuSecundario();
      console.log(this.state.mostrarStateMS());

      // Desuscribir manualmente después de manejar el primer evento
      if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
      }
    })

  }

  ngOnDestroy(): void {
    // Asegurarse de desuscribirse para evitar pérdidas de memoria
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }


  public toggleMenu(): void {
    this.state.toggleMenuSecundario()
    console.log(this.state.mostrarStateMS())
  }

}
