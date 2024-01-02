import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {  }

  public login(email: string): Observable<any> {
    return this.http.get<any>('')
  }

  public register(nombre: string, apellidos: string, email: string, password: string): void {
    
  }

}
