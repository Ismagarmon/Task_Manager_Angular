import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input()
  public nombre: string = ""

  @Input()
  public carta: string = ""

  @Input()
  public cartaInterrogacion: string = ""

  @Output()
  addstring = new EventEmitter<string>()

  constructor() {}

  public comprobar(): void {
    this.addstring.emit(this.nombre)
  }
}
