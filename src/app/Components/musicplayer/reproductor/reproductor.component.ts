import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusvisiService } from '../../../shared/service/menusvisi.service';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ReproductorComponent implements OnChanges, OnInit {

  @Input() 
  public nombre: string = ""

  @Input() 
  public album: string = ""

  @Input() 
  public time: string = ""

  @Input() 
  public img_src: string = ""

  @Input() 
  public nombreartista: string = ""

  public N_audio = new Audio()

  public IsPlaying: boolean = true

  constructor(public state: MenusvisiService) {
  }

  ngOnInit(): void {
    this.createAudio()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.IsPlaying = this.state.showIsPlaying()
    console.log(this.state.showIsPlaying())

    if (this.nombreartista === 'NCS') {
      
      if(changes['nombre']) {
        this.updateAudio()
      }
      else if(this.N_audio.currentTime > 0 && changes['nombre']) {
        this.updateAudio()
      }

      if(changes['IsPlaying']){
        if(this.N_audio.paused){
          this.N_audio.play()
          this.state.toggleIsPlaying()
          console.log(this.state.showIsPlaying())
        } else {
          this.N_audio.pause()
          this.state.toggleIsPlaying()
          console.log(this.state.showIsPlaying())
        }
      }
      
    }

    if(this.nombreartista !== 'NCS'){
      this.img_src = 'https://upload.wikimedia.org/wikipedia/commons/d/d0/NoCopyrightSounds_logo_black-white.svg'
    }
  }

  private async createAudio(): Promise<void> {
    this.N_audio.src = 'http://localhost:8092/song/name/' + this.nombre
    await this.N_audio.load()
    this.N_audio.play()
  }

  private async updateAudio(): Promise<void> {
    if (!this.N_audio.paused) {
      this.N_audio.pause()
    }
    this.N_audio.src = 'http://localhost:8092/song/name/' + this.nombre
    await this.N_audio.load()
    this.N_audio.play()
  }

  public changestate(): void {
    if(this.N_audio.paused){
      this.N_audio.play()
      this.state.toggleIsPlaying()
      console.log(this.state.showIsPlaying())
    } else {
      this.N_audio.pause()
      this.state.toggleIsPlaying()
      console.log(this.state.showIsPlaying())
    }
    
  }

  public changeIsPlayingState(ip: boolean): void {
    this.IsPlaying = ip
  }
}
