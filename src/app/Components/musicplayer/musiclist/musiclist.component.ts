import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../shared/service/apirest.service';
import { Listmusic } from '../../../shared/interface/listmusic';
import { MenusvisiService } from '../../../shared/service/menusvisi.service';
import { AddSuffixPipe } from '../../../shared/pipes/sufix';

@Component({
  selector: 'app-musiclist',
  standalone: true,
  imports: [CommonModule, AddSuffixPipe ],
  templateUrl: './musiclist.component.html',
  styleUrl: './musiclist.component.css'
})
export class MusiclistComponent implements OnInit{

  @Input() 
  public src_img: string = ""

  public email: string = ""

  public cantsongs: number = 0

  @Input() 
  public nombre: string = ""

  public listmusictable: Listmusic[] = []

  public URL: string = ""

  public nombrecancion: string = ""

  public IsPlaying: boolean = false

  @Output() 
  isVisiMAchange = new EventEmitter<boolean>()

  @Output() 
  name = new EventEmitter<string>()

  @Output() 
  album = new EventEmitter<string>()

  @Output() 
  time = new EventEmitter<string>()

  constructor(private getlist: LoginService, public state: MenusvisiService) {
    this.email = this.getEmailUser()
  }

  ngOnInit(): void {
    this.getlist.getMusicList().subscribe((list: Listmusic[]) => {
      this.listmusictable = list
      this.cantsongs = this.listmusictable.length
    })

    this.state.globalVariable.subscribe((value) => {
      if(value !== this.IsPlaying) {
        this.IsPlaying = value
      }
    })
    
  }

  private getEmailUser(): string {
    const jsonstorage = sessionStorage.getItem('Usuario')
    const user = JSON.parse(jsonstorage!)
    let email = user.email.split("@").shift()
    return email
  }

  public changemusic(name: string, album: string, time: string){
    
    if(!this.IsPlaying){
      this.IsPlaying = !this.IsPlaying
      this.state.setSharedVariable(this.IsPlaying)
    } 

    this.nombrecancion = name.slice(0,-3)

    this.isVisiMAchange.emit(true)
    this.name.emit(name)
    this.album.emit(album)
    this.time.emit(time)
  }

  public change(): void {
    this.IsPlaying = !this.IsPlaying
    this.state.setSharedVariable(this.IsPlaying)
  }

}
