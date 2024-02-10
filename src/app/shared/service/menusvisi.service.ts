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

  //------------------------------------------------------------------------
  private sharedIDSubject = new BehaviorSubject<number>(0)

  globalIDVariable = this.sharedIDSubject.asObservable()

  setIDVariable(value: number): void {
    this.sharedIDSubject.next(value)
  }

  getIDVariable(): number {
    return this.sharedIDSubject.value
  }

  //------------------------------------------------------------------------
  private MS = new BehaviorSubject<boolean>(false)

  MSglobal = this.MS.asObservable()

  setMSVariable(value: boolean): void {
    this.MS.next(value)
  }

  getMSVariable(): boolean {
    return this.MS.value
  }

  //------------------------------------------------------------------------
  private Count = new BehaviorSubject<number>(0)

  Countglobal = this.MS.asObservable()

  setCount(value: number): void {
    this.Count.next(value)
  }

  getCount(): number {
    return this.Count.value
  }
  
}
