import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
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
export class ReproductorComponent implements OnChanges, OnDestroy {

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

  /* @Input()
  public IsPlaying: string = "" */

  public cont: number = 1

  public isMuted: boolean = false

  public volumen: number = 20

  public maxtime: number = 0

  public inlinet: string = ""

  public interval: any;

  private s: number = 0

  private m: number = 0

  constructor(public state: MenusvisiService) {
    this.N_audio.volume = 0.2

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cont--

    if (this.nombreartista === 'NCS') {

      if (changes['nombre']) {
        this.updateAudio()
      } else if (this.N_audio.currentTime > 0 && changes['nombre']) {
        this.updateAudio()
      }

      /* if (changes['IsPlaying'] && this.cont > 0) {
        if (this.N_audio.paused) {
          this.N_audio.play()
          this.state.toggleIsPlaying()
        } else {
          this.N_audio.pause()
          this.state.toggleIsPlaying()
        }
      } else if (changes['IsPlaying']) {
        if (this.IsPlaying === 'false') {
          this.N_audio.pause()
        } else {
          this.N_audio.play()
        }
      } */

    }

    if (this.nombreartista !== 'NCS') {
      this.img_src = 'https://upload.wikimedia.org/wikipedia/commons/d/d0/NoCopyrightSounds_logo_black-white.svg'
    }
  }

  private async updateAudio(): Promise<void> {
    if (!this.N_audio.paused) {
      this.N_audio.pause()
    }
    this.N_audio.src = 'http://localhost:8092/song/name/' + this.nombre.slice(0, -2)
    await this.N_audio.load()
    this.N_audio.play()
    setTimeout(() => {
      this.maxtime = Math.floor(this.N_audio.duration)
    },100)

    this.inlinet = "0 : 00"

    this.interval = setInterval(() => {
      this.functionInterval()
      
    }, 300)
    
  }

  public functionInterval(): void {
    if(this.N_audio.ended){
      this.state.toggleIsPlaying()
      clearInterval(this.interval)
    } else {
      this.m = Math.floor(this.N_audio.currentTime / 60)
      this.s = Math.floor(this.N_audio.currentTime % 60)
      if (this.s < 10) { 
        this.inlinet = `${this.m} : 0${this.s}`
      }
      else {
        this.inlinet = `${this.m} : ${this.s}`
      }
    }
  }

  public changestate(): void {
    if (this.N_audio.paused) {
      this.N_audio.play()
      this.state.toggleIsPlaying()
    } else {
      this.N_audio.pause()
      this.state.toggleIsPlaying()
    }

  }

  public changevolume(input: HTMLInputElement): void {
    let input_value: string = input.value
    this.N_audio.volume = parseInt(input_value) / 100
    this.volumen = parseInt(input.value)
    if (this.N_audio.volume > 0) {
      this.isMuted = false
    } else {
      this.isMuted = true
    }
  }

  public mute(input: HTMLInputElement): void {
    if (this.N_audio.volume > 0) {
      this.N_audio.volume = 0
      input.value = '0'
      this.isMuted = true
      this.volumen = 0
    } else {
      this.N_audio.volume = 0.2
      input.value = '20'
      this.isMuted = false
      this.volumen = 20
    }
  }

  public changetime(input: HTMLInputElement): void {
    this.N_audio.currentTime = parseInt(input.value)

    
  }

  ngOnDestroy(): void {
      this.N_audio.volume = 0
      this.N_audio.pause()
      this.N_audio.src = ''
  }
}
