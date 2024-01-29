import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { LoginService } from '../../shared/service/apirest.service'
import { List } from '../../shared/interface/list'
import { MusiclistComponent } from './musiclist/musiclist.component'
import { ReproductorComponent } from './reproductor/reproductor.component'


@Component({
  selector: 'app-musicplayer',
  standalone: true,
  imports: [CommonModule, MusiclistComponent, ReproductorComponent],
  templateUrl: './musicplayer.component.html',
  styleUrl: './musicplayer.component.css'
})
export class MusicplayerComponent implements OnInit {

  public nombrecantante: String = ""

  public flag: Boolean = false

  public lista: List[] = []

  public number: number = 0

  public isVisiML = false

  public isVisiMA = false

  public Nombres: any = [
    { 'Cantante': ["Eminem", "Elton Jhon", "50 Cent"] }
  ]

  public name:string = ""

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

  public cambiarnumero(n: number): void {
    this.number = n
  }

  public cambiarnombre(n: string): void {
    this.name = n
  }

  public changemusiclist(): void {
    this.isVisiML = !this.isVisiML
  }

  public getValueIsPlaying(isMAused: boolean): void {
    this.isVisiMA = isMAused
  }
}
