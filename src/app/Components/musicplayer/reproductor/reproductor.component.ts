import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent implements OnInit {

  @Input() public name: string = ""

  @Input() public album: string = ""

  @Input() public time: string = ""

  @Input() public img_src: string = ""

  public N_audio: any

  ngOnInit(): void {
    this.N_audio = new Audio()
    this.N_audio.src = 'http://localhost:8092/song/name/Warriyo-Mortals (feat. Laura Brehm)_Future Trap'
    this.N_audio.play()
  }
}
