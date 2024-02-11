import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpointsComponent } from './userpoints/userpoints.component';
import { Card } from '../../shared/interface/card';
import { LoginService } from '../../shared/service/apirest.service';
import { UpUser } from '../../shared/interface/up-user';
import { MenusvisiService } from '../../shared/service/menusvisi.service';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-cardgame',
  standalone: true,
  imports: [CommonModule, UserpointsComponent, CardsComponent],
  templateUrl: './cardgame.component.html',
  styleUrl: './cardgame.component.css'
})
export class CardgameComponent implements OnDestroy {

  public hidden: Boolean = false

  public cardslist: Card[] = []

  private arraycompro: number[] = []

  private nombre: string[] = []

  private puntos: number = 0

  private puntuacion: number = 0

  public tiempo: number = 60

  private interval: any

  public IsMatch: string = 'false'

  private puntuacionAuxiliar: number = 0

  public array_numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  constructor(private cards: LoginService, public state: MenusvisiService) {
    this.cards.getcards().subscribe((data: Card[]) => {
      this.cardslist = data
    })
    this.state.globalPuntuacionVariable.subscribe()
    this.state.globalIDVariable.subscribe()
    this.puntuacionAuxiliar = this.state.getPuntuacionVariable()
    
  }

  public changehidden(btn: HTMLButtonElement): void {
    this.hidden = !this.hidden
    if (this.hidden) {
      btn.textContent = ' '
      btn.textContent = 'Resultados mostrados'
      btn.style.cursor = 'default'
    }
  }

  private TimeReset(): void {
    this.tiempo = 60
  }

  public empezar(tablero: HTMLDivElement): void {

    clearInterval(this.interval)
    this.TimeReset()

    tablero.innerHTML = ''
    this.setTimer(tablero)
    this.IsMatch = 'true'

    this.array_numbers.sort(function () { return Math.random() - 0.5 })

    

  }

  public comprobar(nombre: string) {

    this.nombre.push(nombre)

    if (this.nombre.length == 2) {
      if (this.nombre[0] === this.nombre[1] || this.nombre[0] === this.nombre[1]) {

        this.nombre = []

        this.puntos++

        if (this.puntos == 6) {
          this.ganar()
        }

      } else {

        this.arraycompro = []
      }
    }
  }

  

  private ganar(): void {
    alert('Has ganado')
    let time: number = this.tiempo
    this.actualizarpts(time)
    clearInterval(this.interval)
    this.tiempo = 60
    this.puntos = 0
    
  }

  private perder(div: HTMLDivElement): void {
    alert('Has perdido')
    clearInterval(this.interval)
    this.tiempo = 60
    div.innerHTML = ''
    this.puntos = 0
    this.IsMatch = 'false'
  }

  private setTimer(div: HTMLDivElement): void {
    this.interval = setInterval(() => {
      this.tiempo--
      if (this.tiempo == 0) {
        this.perder(div)
      }
    }, 1000)
  }

  private actualizarpts(time: number): void {
    this.puntuacion = 24 * time

    if (this.puntuacionAuxiliar < this.puntuacion) {
      this.puntuacionAuxiliar = this.puntuacion

      this.state.setPuntuacionVariable(this.puntuacionAuxiliar)
      
      const user: UpUser = {
        id: this.state.getIDVariable(),
        puntuacion: this.puntuacion
      }

      this.cards.updateUser(user).subscribe({
        complete: () => {
          alert('Se ha actualizado correctamente al usuario.')
          this.puntuacion = 0
          this.IsMatch = 'false'
        },
        error: (err) => {
          alert(err)
        },
      })
    }

  }

  ngOnDestroy(): void {
    this.tiempo = 0
    this.puntuacion = 0
    clearInterval(this.interval)
  }
}
