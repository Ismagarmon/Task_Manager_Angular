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
  private MS= new BehaviorSubject<boolean>(false)

  MSglobal = this.MS.asObservable()

  setMSVariable(value: boolean): void {
    this.MS.next(value)
  }

  getMSVariable(): boolean {
    return this.MS.value
  }

  //----------------------------------------------------------------
  // Aquí es donde van a estar todos los id que si haya acertado
  private numberArraySubject= new BehaviorSubject<number[]>([])

  ArrayNumberCartasCorrectas = this.numberArraySubject.asObservable()

  addNumberToArrayCartasCorrectas(n: number) {
    const currentArray = this.numberArraySubject.getValue()
    const updatedArray = [...currentArray, n]
    this.numberArraySubject.next(updatedArray)
  }

  getNumberArrayCartasCorrectas(): number[] {
    return this.numberArraySubject.value
  }

  removeNumberArrayCartasCorrectas(): void {
    const currentArray = this.numberArraySubject.getValue()
    currentArray.pop()
    currentArray.pop()
    this.numberArraySubject.next(currentArray)
  }

  //----------------------------------------------------------------
  // Aquí voy a meter los id que voy a ir metiendo para comprobar si son iguales o no
  private ComprobacionArray= new BehaviorSubject<number[]>([])

  ArrayNumberGlobalComparacion = this.ComprobacionArray.asObservable()

  addNumberToArrayComprobacion(n: number) {
    const currentArray = this.ComprobacionArray.getValue()
    const updatedArray = [...currentArray, n]
    this.ComprobacionArray.next(updatedArray)
  }

  getNumberArrayComprobacion(): number[] {
    return this.ComprobacionArray.value
  }

  removeNumberArrayComprobacion(): void {
    const currentArray: number[] = []
    this.ComprobacionArray.next(currentArray)
  }

  //----------------------------------------------------------------
  private CantCartas= new BehaviorSubject<number>(0)

  CantCartasGlobal = this.CantCartas.asObservable()

  changenumber(n: number) {
    this.CantCartas.next(n);
  }

  getCantCartas():number {
    return this.CantCartas.value
  }

  reiniciarCantCartas(): void {
    this.CantCartas.next(0)
  }
}
