import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(email: string): Observable<any> {
    return this.http.get<any>('https://arnem-dev-sqqc.1.us-1.fl0.io/api/users')
  }

  public register(URL:string, user: Object) {

    return this.http.post(URL,
      user
    )
  }

}
