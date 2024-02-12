import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusvisiService } from '../../../shared/service/menusvisi.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnChanges, OnDestroy {

  @Input()
  public id: string = ""

  @Input()
  public carta: string = ""

  @Input()
  public cartaInterrogacion: string = ""

  @Input()
  public paredblanca: string = ""

  public IsVisible: boolean = true

  public IsSelected: boolean = false

  public IsMatched: boolean = false

  @Input()
  public IsPlaying: string = 'false'

  public arraynumeros: number[] = []

  private interval: any

  constructor(private state: MenusvisiService) {
    this.state.ArrayNumberGlobalComparacion.subscribe()
    this.state.CantCartasGlobal.subscribe()
    this.state.ArrayNumberCartasCorrectas.subscribe()

  }

  public empezar(): void {
    setTimeout(() => {
      this.IsVisible = false
      this.interval = setInterval(() => {
        this.checkCard()
      }, 100)
    }, 2000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['IsPlaying']) {
      if (this.IsPlaying === 'true') {
        this.state.removeNumberArrayCartasCorrectas()
        this.state.removeNumberArrayComprobacion()
        this.state.changenumber(0)
        this.empezar()
        this.IsMatched = false
        this.IsSelected = false
        this.IsVisible = true
        console.log('Ha comenzado el juego')
      } else {
        clearInterval(this.interval)
        console.log('Se ha terminado el juego')
      }

    }
  }

  public Voltear(): void {
    if (this.IsSelected) {
      alert('No puedes pulsar la carta dos veces')
    } else {
      if (this.IsMatched) {
        alert('Esta carta ya ha sido destapada')
      } else {
        this.IsSelected = true
        this.IsVisible = true
        this.state.addNumberToArrayComprobacion(parseInt(this.id))
        this.comprobar()
      }
    }
  }

  public checkCard(): void {
    if (this.state.getNumberArrayCartasCorrectas().includes(parseInt(this.id))) {
      this.IsMatched = true
      this.IsVisible = true
    } else if (this.state.getNumberArrayComprobacion().includes(parseInt(this.id)) && !this.IsMatched) {
      this.IsVisible = true
      this.IsSelected = true
    } else if (this.state.getNumberArrayComprobacion().length == 0 && this.IsSelected) {
      this.IsVisible = false
      this.IsSelected = false
    }


  }

  private comprobar(): void {
    if (this.state.getNumberArrayComprobacion().length == 2) {

      if (this.state.getNumberArrayComprobacion()[0] / 2 == this.state.getNumberArrayComprobacion()[1] || this.state.getNumberArrayComprobacion()[0] == this.state.getNumberArrayComprobacion()[1] / 2) {

        this.IsSelected = false
        this.IsMatched = true
        this.IsVisible = true
        this.state.addNumberToArrayCartasCorrectas(this.state.getNumberArrayComprobacion()[0])
        this.state.addNumberToArrayCartasCorrectas(this.state.getNumberArrayComprobacion()[1])
        this.state.removeNumberArrayComprobacion()

        this.state.addnumber()
      } else {
        this.state.removeNumberArrayComprobacion()
        this.IsSelected = false
        setTimeout(() => {
          this.IsVisible = false
        }, 200)

      }
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
    this.state.removeNumberArrayCartasCorrectas()
    this.state.removeNumberArrayComprobacion()
    this.state.changenumber(0)
  }
}
