import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-musicplayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musicplayer.component.html',
  styleUrl: './musicplayer.component.css'
})
export class MusicplayerComponent {

  public nombrecantante: string = ""

  constructor(private AR: ActivatedRoute) {
    this.AR.paramMap.subscribe((parametros: ParamMap) => {
      this.nombrecantante = parametros.get("cantante")!
    })
  }

  public changevalue(span: HTMLSpanElement, input: HTMLInputElement): void {
    let value: string = input.value
    let valuenumber: string = Math.floor(parseInt(value)).toString()
    span.textContent = valuenumber
    span.classList.add('show')
    console.log(valuenumber)
  }

  public mouseup(span: HTMLSpanElement): void {
    span.classList.remove('show')
  }
}
