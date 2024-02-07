import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenusvisiService {

  
  //------------------------------------------------------------------------
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

  //------------------------------------------------------------------------
  private EstadoMenuSecundario = new BehaviorSubject<boolean>(false)
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

  //------------------------------------------------------------------------
  private EstadoMenuPrimario = new BehaviorSubject<boolean>(false)

  mostrarMenuPrimario(): Boolean {
    return this.EstadoMenuPrimario.value
  }

  menuPrimarioVisible$(): Observable<boolean> {
    return this.EstadoMenuPrimario.asObservable()
  }

  toggleMenuPrimario(): void {
    this.EstadoMenuPrimario.next(!this.EstadoMenuPrimario.value)
  }

  //------------------------------------------------------------------------
  private sharedVariableSubject = new BehaviorSubject<boolean>(false)

  globalVariable = this.sharedVariableSubject.asObservable()

  setSharedVariable(value: boolean): void {
    this.sharedVariableSubject.next(value)
  }

  //------------------------------------------------------------------------
  private sharedNameSubject = new BehaviorSubject<string>('')

  globalNameVariable = this.sharedNameSubject.asObservable()

  setNameVariable(value: string): void {
    this.sharedNameSubject.next(value)
  }

  getNameVariable(): string {
    return this.sharedNameSubject.value
  }

  //------------------------------------------------------------------------
  private sharedEmailSubject = new BehaviorSubject<string>('')

  globalEmailVariable = this.sharedEmailSubject.asObservable()

  setEmailVariable(value: string): void {
    this.sharedEmailSubject.next(value)
  }

  getEmailVariable(): string {
    return this.sharedEmailSubject.value
  }

  //------------------------------------------------------------------------
  private sharedPuntuacionSubject = new BehaviorSubject<number>(0)

  globalPuntuacionVariable = this.sharedPuntuacionSubject.asObservable()

  setPuntuacionVariable(value: number): void {
    this.sharedPuntuacionSubject.next(value)
  }

  getPuntuacionVariable(): number {
    return this.sharedPuntuacionSubject.value
  }
}
