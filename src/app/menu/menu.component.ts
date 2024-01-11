import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnChanges, OnInit {

  constructor(private router:Router){

  }

  ngOnInit(): void {
    let jsonls: Object | null = localStorage.getItem("User")
    this.user
  }

  ngOnChanges(): void {
    console.log(this.user)
  }

  public isLogged: boolean = true

  private prueba: string = ""

  public user: string = "Ismael"

  /* public changepropierties(ul: HTMLUListElement): void {
    this.prueba = "ASDAS"
    console.log(this.prueba)
  } */

  public logout(): void {
    this.isLogged = false
    this.router.navigate(['home'])
  }

  public change(ul: HTMLLIElement){
    
  }

}
