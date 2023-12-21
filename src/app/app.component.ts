import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges {
  title = 'Task_Manager_Angular';

  ngOnChanges(): void {
    console.log(this.user)
  }

  private prueba: string = ""

  public user: string = ""

  public changepropierties(ul: HTMLUListElement): void {
    this.prueba = "ASDAS"
    console.log(this.prueba)
  }
}
