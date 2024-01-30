import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../shared/service/apirest.service';
import { Listmusic } from '../../../shared/interface/listmusic';
import { MenusvisiService } from '../../../shared/service/menusvisi.service';

@Component({
  selector: 'app-musiclist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musiclist.component.html',
  styleUrl: './musiclist.component.css'
})
export class MusiclistComponent implements OnInit, OnChanges{

  @Input() public src_img: string = ""

  public email: string = ""

  public cantsongs: number = 0

  @Input() public nombre: string = ""

  public listmusictable: Listmusic[] = []

  public URL: string = ""

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
    
  }

  private getEmailUser(): string {
    const jsonstorage = sessionStorage.getItem('Usuario')
    const user = JSON.parse(jsonstorage!)
    let email = user.email.split("@").shift()
    return email
  }

  public change(): void {
    this.state.toggleIsPlaying()
  }

  public changemusic(name: string, album: string, time: string){
    this.state.toggleIsPlaying() 
    this.isVisiMAchange.emit(this.state.showIsPlaying())
    this.name.emit(name)
    this.album.emit(album)
    this.time.emit(time)
  }

  ngOnChanges(): void {
      
  }
}
