import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenusvisiService {

  private EstadoMenuSecundario = new BehaviorSubject<boolean>(false)
  private EstadoMenuPrimario = new BehaviorSubject<boolean>(false)
  private EstadoIsPlaying = new BehaviorSubject<boolean>(false)

  toggleIsPlaying(): void {
    this.EstadoIsPlaying.next(!this.EstadoIsPlaying.value)
  }

  showIsPlaying(): boolean {
    return this.EstadoIsPlaying.value
  }

  StateIsPlaying$(): Observable<boolean> {
    return this.EstadoIsPlaying.asObservable()
  }

  mostrarMenuSecundario(): void {
    this.EstadoMenuSecundario.next(true)
  }
  
  mostrarStateMS(): Boolean {
    return this.EstadoMenuSecundario.value
  }

  menuSecundarioVisible$(): Observable<boolean> {
    return this.EstadoMenuSecundario.asObservable()
  }

  toggleMenuSecundario(): void {
    this.EstadoMenuSecundario.next(!this.EstadoMenuSecundario.value)
  }

  mostrarMenuPrimario(): Boolean {
    return this.EstadoMenuPrimario.value
  }

  menuPrimarioVisible$(): Observable<boolean> {
    return this.EstadoMenuPrimario.asObservable()
  }

  toggleMenuPrimario(): void {
    this.EstadoMenuPrimario.next(!this.EstadoMenuPrimario.value)
  }
}
