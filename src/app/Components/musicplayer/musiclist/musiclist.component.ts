import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../shared/service/apirest.service';
import { Listmusic } from '../../../shared/interface/listmusic';

@Component({
  selector: 'app-musiclist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musiclist.component.html',
  styleUrl: './musiclist.component.css'
})
export class MusiclistComponent implements OnInit {

  @Input() public src_img: string = ""

  public email: string = ""

  public cantsongs: number = 0

  @Input() public nombre: string = ""

  public isPlay: string = '<svg width="25" height="25" viewBox="0 0 1024 1024"><path d="M416.272 0H192.064c-17.664 0-32 14.32-32 32v960c0 17.664 14.336 32 32 32h224.208c17.68 0 32-14.336 32-32V32c0-17.68-14.32-32-32-32m-32 960H224.064V64h160.208zM831.937 0H608.881c-17.68 0-32 14.32-32 32v960c0 17.664 14.32 32 32 32h223.056c17.68 0 32-14.336 32-32V32c0-17.68-14.304-32-32-32m-32 960H640.881V64h159.056z"/></svg>'

  public isPlaying: Boolean = false

  public listmusictable: Listmusic[] = []

  @Output() isVisiMAchange = new EventEmitter<Boolean>()

  @Output() name = new EventEmitter<string>()

  @Output() album = new EventEmitter<string>()

  @Output() time = new EventEmitter<string>()

  constructor(private getlist: LoginService) {

  }

  ngOnInit(): void {
    this.getlist.getMusicList().subscribe((list: Listmusic[]) => {
      this.listmusictable = list
      this.cantsongs = this.listmusictable.length
    })
    this.nombre = 'Mis lista de canciones'
    this.email = "ismagarmon3"
    document.getElementById('playbtn')!.innerHTML = this.isPlay
  }

  public change(): void {
    this.isPlaying = !this.isPlaying // Esto lo voy a hacer con una variable global
    if (this.isPlaying) {
      document.getElementById('playbtn')!.innerHTML = '<svg width="25" height="25" viewBox="0 0 1024 1024"><path d="m144.624 65.392l735.744 446.592l-736.736 446.624zm0-64a63.765 63.765 0 0 0-31.088 8.063c-20.32 11.28-32.912 32.705-32.912 55.937l-.992 893.216a63.958 63.958 0 0 0 32.912 55.936a63.937 63.937 0 0 0 31.088 8.065c11.712 0 23.472-3.216 33.775-9.664l736.72-446.624a63.94 63.94 0 0 0 30.257-54.336c0-22.112-11.44-42.672-30.257-54.352L178.4 11.025a64.084 64.084 0 0 0-33.775-9.632z"/></svg>'
    } else {
      document.getElementById('playbtn')!.innerHTML = '<svg width="25" height="25" viewBox="0 0 1024 1024"><path d="M416.272 0H192.064c-17.664 0-32 14.32-32 32v960c0 17.664 14.336 32 32 32h224.208c17.68 0 32-14.336 32-32V32c0-17.68-14.32-32-32-32m-32 960H224.064V64h160.208zM831.937 0H608.881c-17.68 0-32 14.32-32 32v960c0 17.664 14.32 32 32 32h223.056c17.68 0 32-14.336 32-32V32c0-17.68-14.304-32-32-32m-32 960H640.881V64h159.056z"/></svg>'
    }
  }

  public changemusic(name: string, album: string, time: string){
    this.name.emit(name)
    this.album.emit(album)
    this.time.emit(time)
  }
}
