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

  public flag: Boolean = false

  public Nombres: any = [
    { 'Cantante': ["Eminem", "Elton Jhon", "50 Cent"] }
  ]

  constructor(private AR: ActivatedRoute) {
    this.AR.paramMap.subscribe((parametros: ParamMap) => {
      this.nombrecantante = parametros.get("cantante")!
    })
    
    if (this.nombrecantante != "Eminem" ) {
      this.flag = false
    }
    else {
      this.flag = true
    }

    if (this.nombrecantante != "Elton Jhon" ) {
      this.flag = false
    }
    else {
      this.flag = true
    }

    if (this.nombrecantante != "50 Cent" ) {
      this.flag = false
    }
    else {
      this.flag = true
    }
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
