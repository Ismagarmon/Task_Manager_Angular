import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';
import { List } from '../interface/list';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  }

  private URL: string = "https://arnem-dev-sqqc.1.us-1.fl0.io/api/users"

  constructor(private http: HttpClient) { }

  public login(): Observable<Usuario[]> {

    return this.http.get<Usuario[]>(this.URL, this.httpOptions)
  }

  public register(URL: string, user: any) {

    return this.http.post(URL, user, this.httpOptions )
  }

  public findEmail(email: string): Observable<Usuario> {

    return this.http.get<Usuario>(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/email/${email}`, this.httpOptions)
  }

  public deleteUser(id: number) {

    return this.http.delete(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/${id}`, this.httpOptions)
  }

  public findId(id: number): Observable<Usuario> {

    return this.http.get<Usuario>(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/${id}`, this.httpOptions)
  }

  public getlist(): Observable<List> {
    
    return this.http.get<List>('https://arnem-dev-sqqc.1.us-1.fl0.io/song/list', this.httpOptions)
  }
}
