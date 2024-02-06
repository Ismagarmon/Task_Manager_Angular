import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpointsComponent } from './userpoints/userpoints.component';
import { Card } from '../../shared/interface/card';
import { LoginService } from '../../shared/service/apirest.service';

@Component({
  selector: 'app-cardgame',
  standalone: true,
  imports: [CommonModule, UserpointsComponent],
  templateUrl: './cardgame.component.html',
  styleUrl: './cardgame.component.css'
})
export class CardgameComponent {

  public hidden: Boolean = false

  public cardslist: Card[] = []

  public arraycompro: number[] = []

  constructor(private cards: LoginService) {
    this.cards.getcards().subscribe((data: Card[]) => {
      this.cardslist = data
      console.log(this.cardslist)
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

  public empezar(tablero: HTMLDivElement): void {
    this.cardslist.forEach((card) => {
      let div = document.createElement('div')
      div.id = card.id.toString()
      div.style.cssText = `
      width: 100%;
      height: 100%;
      border: 5px solid black
      `
      div.addEventListener('click', () => {
        this.comprobar(parseInt(div.id),div)
      })

      let img = document.createElement('img')
      img.alt = 'Imagen'
      img.src = card.url
      img.style.cssText = `
      width: 98%;
      height: 98%
      `
      div.append(img)

      tablero.append(div)
    })
  }

  public comprobar(id: number, div: HTMLDivElement) {
    document.getElementById(id.toString())!.style.cssText = `
    width: 100%;
    height: 100%;
    border: 5px solid purple
    `
    this.arraycompro.push(id)
    if (this.arraycompro.length == 2) {
      if (this.arraycompro[0] == this.arraycompro[1] / 2 || this.arraycompro[0] / 2 == this.arraycompro[1]) {
        

        document.getElementById(this.arraycompro[0].toString())!.style.opacity = '0'
        document.getElementById(this.arraycompro[1].toString())!.style.opacity = '0'

        document.getElementById(this.arraycompro[0].toString())!.removeEventListener('click', () => {
          this.comprobar(parseInt(div.id),div)
        })
        document.getElementById(this.arraycompro[1].toString())!.removeEventListener('click', () => {
          this.comprobar(parseInt(div.id),div)
        })

        this.arraycompro = []

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

        this.arraycompro = []
      }
    }
  }
}
