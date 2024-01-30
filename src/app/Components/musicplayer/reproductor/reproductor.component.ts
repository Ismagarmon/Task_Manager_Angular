import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class ReproductorComponent implements OnChanges {

  @Input() public nombre: string = ""

  @Input() public album: string = ""

  @Input() public time: string = ""

  @Input() public img_src: string = ""

  public N_audio = new Audio()

  constructor(public state: MenusvisiService) {
  }

  ngOnChanges(): void {
    this.updateAudio()

  }

  private async updateAudio(): Promise<void> {
    if(!this.N_audio.paused){
      this.N_audio.pause()
    }
    this.N_audio.src = 'http://localhost:8092/song/name/' + this.nombre
    await this.N_audio.load()
    this.N_audio.play()
  }
}
