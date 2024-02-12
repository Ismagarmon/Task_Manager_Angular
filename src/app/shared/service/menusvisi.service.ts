import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenusvisiService {

  
  //------------------------------------------------------------------------
  private EstadoIsPlaying = new BehaviorSubject<boolean>(false)

  public toggleIsPlaying(): void {
    this.EstadoIsPlaying.next(!this.EstadoIsPlaying.value)
  }

  public showIsPlaying(): boolean {
    return this.EstadoIsPlaying.value
  }

  public StateIsPlaying$(): Observable<boolean> {
    return this.EstadoIsPlaying.asObservable()
  }

  //------------------------------------------------------------------------
  private EstadoMenuPrimario = new BehaviorSubject<boolean>(false)

  public mostrarMenuPrimario(): Boolean {
    return this.EstadoMenuPrimario.value
  }

  public menuPrimarioVisible$(): Observable<boolean> {
    return this.EstadoMenuPrimario.asObservable()
  }

  public toggleMenuPrimario(): void {
    this.EstadoMenuPrimario.next(!this.EstadoMenuPrimario.value)
  }

  //------------------------------------------------------------------------
  private sharedVariableSubject = new BehaviorSubject<boolean>(false)

  public globalVariable = this.sharedVariableSubject.asObservable()

  public setSharedVariable(value: boolean): void {
    this.sharedVariableSubject.next(value)
  }

  //------------------------------------------------------------------------
  private sharedNameSubject = new BehaviorSubject<string>('')

  public globalNameVariable = this.sharedNameSubject.asObservable()

  public setNameVariable(value: string): void {
    this.sharedNameSubject.next(value)
  }

  public getNameVariable(): string {
    return this.sharedNameSubject.value
  }

  //------------------------------------------------------------------------
  private sharedEmailSubject = new BehaviorSubject<string>('')

  public globalEmailVariable = this.sharedEmailSubject.asObservable()

  public setEmailVariable(value: string): void {
    this.sharedEmailSubject.next(value)
  }

  public getEmailVariable(): string {
    return this.sharedEmailSubject.value
  }

  //------------------------------------------------------------------------
  private sharedPuntuacionSubject = new BehaviorSubject<number>(0)

  public globalPuntuacionVariable = this.sharedPuntuacionSubject.asObservable()

  public setPuntuacionVariable(value: number): void {
    this.sharedPuntuacionSubject.next(value)
  }

  public getPuntuacionVariable(): number {
    return this.sharedPuntuacionSubject.value
  }

  //------------------------------------------------------------------------
  private sharedIDSubject = new BehaviorSubject<number>(0)

  public globalIDVariable = this.sharedIDSubject.asObservable()

  public setIDVariable(value: number): void {
    this.sharedIDSubject.next(value)
  }

  public getIDVariable(): number {
    return this.sharedIDSubject.value
  }

  //------------------------------------------------------------------------
  private MS= new BehaviorSubject<boolean>(false)

  public MSglobal = this.MS.asObservable()

  public setMSVariable(value: boolean): void {
    this.MS.next(value)
  }

  public getMSVariable(): boolean {
    return this.MS.value
  }

  //----------------------------------------------------------------
  // Aquí es donde van a estar todos los id que si haya acertado
  private numberArraySubject= new BehaviorSubject<number[]>([])

  public ArrayNumberCartasCorrectas = this.numberArraySubject.asObservable()

  public addNumberToArrayCartasCorrectas(n: number) {
    const currentArray = this.numberArraySubject.getValue()
    const updatedArray = [...currentArray, n]
    this.numberArraySubject.next(updatedArray)
  }

  public getNumberArrayCartasCorrectas(): number[] {
    return this.numberArraySubject.value
  }

  public removeNumberArrayCartasCorrectas(): void {
    const currentArray = this.numberArraySubject.getValue()
    currentArray.pop()
    currentArray.pop()
    this.numberArraySubject.next(currentArray)
  }

  //----------------------------------------------------------------
  // Aquí voy a meter los id que voy a ir metiendo para comprobar si son iguales o no
  private ComprobacionArray= new BehaviorSubject<number[]>([])

  public ArrayNumberGlobalComparacion = this.ComprobacionArray.asObservable()

  public addNumberToArrayComprobacion(n: number) {
    const currentArray = this.ComprobacionArray.getValue()
    const updatedArray = [...currentArray, n]
    this.ComprobacionArray.next(updatedArray)
  }

  public getNumberArrayComprobacion(): number[] {
    return this.ComprobacionArray.value
  }

  public removeNumberArrayComprobacion(): void {
    const currentArray: number[] = []
    this.ComprobacionArray.next(currentArray)
  }

  //----------------------------------------------------------------
  private CantCartas= new BehaviorSubject<number>(0)

  public CantCartasGlobal = this.CantCartas.asObservable()

  public changenumber(n: number) {
    this.CantCartas.next(n)
  }

  public addnumber(): void {
    let numerocartas = this.CantCartas.value
    numerocartas++
    this.CantCartas.next(numerocartas)
  }

  public getCantCartas():number {
    return this.CantCartas.value
  }

  public reiniciarCantCartas(): void {
    this.CantCartas.next(0)
  }
}
