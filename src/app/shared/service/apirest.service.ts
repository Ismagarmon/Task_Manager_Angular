import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL: string = "https://arnem-dev-sqqc.1.us-1.fl0.io/api/users"

  constructor(private http: HttpClient) { }

  public login(): Observable<Usuario[]> {



    return this.http.get<Usuario[]>(this.URL, httpOptions)
  }

  public register(URL: string, user: any) {

    return this.http.post(URL, user, httpOptions )
  }

  public findEmail(email: string): Observable<Usuario> {

    return this.http.get<Usuario>(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/email/${email}`, httpOptions)
  }

  public deleteUser(id: number) {

    return this.http.delete(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/${id}`, httpOptions)
  }

  public findId(id: number): Observable<Usuario> {

    return this.http.get<Usuario>(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/${id}`, httpOptions)
  }

  public getlist(): Observable<any> {
    return this.http.get<any>('https://arnem-dev-sqqc.1.us-1.fl0.io/song/list', httpOptions)
  }
}
