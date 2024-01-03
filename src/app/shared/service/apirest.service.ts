import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private http: HttpClient) { }


  public login(): Observable<Usuario[]> {

    return this.http.get<Usuario[]>('https://arnem-dev-sqqc.1.us-1.fl0.io/api/users', { responseType: 'json' })
  }

  public register(URL: string, user: any) {

    return this.http.post(URL, user, httpOptions )
  }

  public findEmail(email: string): Observable<Usuario> {

    return this.http.get<Usuario>(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/email/${email}`)
  }

  public deleteUser(id: Number) {

    return this.http.delete(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/${id}`)
  }

  public findId(id: Number): Observable<Usuario> {

    return this.http.get<Usuario>(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/${id}`)
  }

}
