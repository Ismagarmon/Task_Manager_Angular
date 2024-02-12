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

  public IsVisibleCards: boolean = false

  private puntuacion: number = 0

  public tiempo: number = 60

  private interval: any

  public IsPlaying: string = 'false'

  private cc: number = 0

  public paredblanca: string = 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyZWQlMjBibGFuY2F8ZW58MHx8MHx8fDA%3D'

  private puntuacionAuxiliar: number = 0

  public array_numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  constructor(private cards: LoginService, public state: MenusvisiService) {
    this.cards.getcards().subscribe((data: Card[]) => {
      this.cardslist = data
    })
    this.state.globalPuntuacionVariable.subscribe()
    this.state.globalIDVariable.subscribe()
    this.puntuacionAuxiliar = this.state.getPuntuacionVariable()
    this.state.CantCartasGlobal.subscribe((n) => {
      if(this.cc != n){
        this.cc = n
        if(this.cc == 6){
          this.ganar()
        }
      }
    })
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

    this.setTimer(tablero)
    this.IsPlaying = 'true'

    this.array_numbers.sort(function () { return Math.random() - 0.5 })

    this.IsVisibleCards = true

  }

  private ganar(): void {
    this.state.changenumber(0)
    alert('Has ganado')
    let time: number = this.tiempo
    this.actualizarpts(time)
    clearInterval(this.interval)
    this.tiempo = 60
  }

  private perder(div: HTMLDivElement): void {
    alert('Has perdido')
    clearInterval(this.interval)
    this.tiempo = 60
    div.innerHTML = ''
    this.IsPlaying = 'false'
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
          this.IsPlaying = 'false'
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
