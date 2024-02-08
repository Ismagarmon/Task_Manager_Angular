import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpointsComponent } from './userpoints/userpoints.component';
import { Card } from '../../shared/interface/card';
import { LoginService } from '../../shared/service/apirest.service';
import { UpUser } from '../../shared/interface/up-user';
import { MenusvisiService } from '../../shared/service/menusvisi.service';

@Component({
  selector: 'app-cardgame',
  standalone: true,
  imports: [CommonModule, UserpointsComponent],
  templateUrl: './cardgame.component.html',
  styleUrl: './cardgame.component.css'
})
export class CardgameComponent implements OnDestroy {

  public hidden: Boolean = false

  private cardslist: Card[] = []

  private arraycompro: number[] = []

  private arrayimg: HTMLImageElement[] = []

  private puntos: number = 0

  private puntuacion: number = 0

  public tiempo: number = 60

  private interval: any

  public IsMatch: string = 'false'

  private puntuacionAuxiliar: number = 0

  constructor(private cards: LoginService, public state: MenusvisiService) {
    this.cards.getcards().subscribe((data: Card[]) => {
      this.cardslist = data
    })
    this.state.globalPuntuacionVariable.subscribe()
    this.state.globalIDVariable.subscribe()
    this.puntuacionAuxiliar = this.state.getPuntuacionVariable()
    console.log(this.puntuacionAuxiliar)
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

    this.cardslist.forEach((card) => {
      let div = document.createElement('div')
      div.id = card.id.toString()
      div.style.cssText = `
      width: 100%;
      height: 100%;
      border: 5px solid black
      `

      let img = document.createElement('img')
      img.alt = ''
      img.style.cssText =
      `
      width: 100%;
      height: 100%
      `
      img.src = card.url
      setTimeout(() => {
        img.src = card.q
      }, 2000)

      div.addEventListener('click', () => this.Voltear(div, img))
      div.append(img)

      tablero.append(div)
    })
  }

  private comprobar(id: number, div: HTMLDivElement, img: HTMLImageElement) {

    this.arrayimg.push(img)
    this.arraycompro.push(id)
    if (this.arraycompro.length == 2) {
      if (this.arraycompro[0] == this.arraycompro[1] / 2 || this.arraycompro[0] / 2 == this.arraycompro[1]) {

        document.getElementById(this.arraycompro[0].toString())!.classList.add('staged')
        document.getElementById(this.arraycompro[1].toString())!.classList.add('staged')

        setTimeout(() => {
          this.arrayimg.forEach(img => {
            img.src = 'https://media.istockphoto.com/id/1308043708/es/vector/pared-de-ladrillo-blanco-textura-de-fondo-sin-costuras-superficie-realista.jpg?s=612x612&w=0&k=20&c=QSVjLHWvWqtEjjrqRBEU1QO7s4xS4su4TYZYqyKyK0g='
          })
          this.arrayimg = []
        }, 500)

        this.arraycompro = []

        this.puntos++

        if (this.puntos == 6) {
          this.ganar()
        }

      } else {
        document.getElementById(this.arraycompro[0].toString())!.style.cssText = `
        width: 100%;
        height: 100%;
        border: 5px solid black
        `

        document.getElementById(this.arraycompro[1].toString())!.style.cssText = `
        width: 100%;
        height: 100%;
        border: 5px solid black
        `
        setTimeout(() => {
          this.arrayimg.forEach(img => {
            img.src = 'https://media.istockphoto.com/id/1162198273/es/vector/dise%C3%B1o-de-ilustraci%C3%B3n-vectorial-plana-icono-de-signo-de-interrogaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=ZP_KrHAiZiMLttztdGIegaJlNhBYCvsyr0S9-irTTTM='
          })
          this.arrayimg = []
        }, 500)

        this.arraycompro = []
      }
    }
  }

  private Voltear(div: HTMLDivElement, img: HTMLImageElement): void {
    if (div.classList.contains('staged')) {
      alert('No vas a hacer nada haciendo click en esta carta')
    }
    else {
      document.getElementById(div.id.toString())!.style.cssText =
        `
      width: 100%;
      height: 100%;
      border: 5px solid purple
      `

      let cardobjet = this.cardslist.find(card => card.id === parseInt(div.id))

      img.src = cardobjet!.url

      this.comprobar(parseInt(div.id), div, img)
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
