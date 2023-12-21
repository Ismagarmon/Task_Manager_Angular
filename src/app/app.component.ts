import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges {
  title = 'Task_Manager_Angular';

  ngOnChanges(): void {
    console.log(this.user)
  }

  private isLogged: boolean = false

  private prueba: string = ""

  public user: string = ""

  public changepropierties(ul: HTMLUListElement): void {
    this.prueba = "ASDAS"
    console.log(this.prueba)
  }

  public logout(): void {
    this.isLogged = false
  }
}
