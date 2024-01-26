import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpointsComponent } from './userpoints/userpoints.component';

@Component({
  selector: 'app-cardgame',
  standalone: true,
  imports: [CommonModule, UserpointsComponent],
  templateUrl: './cardgame.component.html',
  styleUrl: './cardgame.component.css'
})
export class CardgameComponent implements OnInit{

  public hidden: Boolean = false

  ngOnInit(): void {
    document.getElementById('btntabla')!.textContent = 'Mostrar resultados'
  }

  public changehidden(btn: HTMLButtonElement): void {
    this.hidden = !this.hidden
    if(this.hidden){
      btn.textContent = 'Resultados mostrados'
      btn.style.cursor = 'default'
    }
  }
}
