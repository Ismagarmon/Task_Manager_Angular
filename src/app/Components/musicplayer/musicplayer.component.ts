import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { LoginService } from '../../shared/service/apirest.service'
import { List } from '../../shared/interface/list'


@Component({
  selector: 'app-musicplayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musicplayer.component.html',
  styleUrl: './musicplayer.component.css'
})
export class MusicplayerComponent implements OnInit {

  public nombrecantante: String = ""

  public flag: Boolean = false

  public lista: List[] = []

  public Nombres: any = [
    { 'Cantante': ["Eminem", "Elton Jhon", "50 Cent"] }
  ]

  constructor(private AR: ActivatedRoute, private getlist: LoginService) {
    this.AR.paramMap.subscribe((parametros: ParamMap) => {
      this.nombrecantante = parametros.get("cantante")!
    })

    console.log(this.nombrecantante)
    
    if (this.nombrecantante === "Eminem" ) {
      this.flag = true
    }

    if (this.nombrecantante === "Elton Jhon" ) {
      this.flag = true
    }

    if (this.nombrecantante === "50 Cent" ) {
      this.flag = true
    }

    if (this.nombrecantante === "NCS" ) {
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

  ngOnInit(): void {
      this.getlist.getlist().subscribe(
        (list: List[]) => {
          this.lista = list
        }
      )

      
  }
}
