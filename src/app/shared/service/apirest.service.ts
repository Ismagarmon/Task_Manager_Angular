import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';
import { List } from '../interface/list';
import { Message } from '../interface/message';
import { SignInUser } from '../interface/sign-in-user';
import { Listmusic } from '../interface/listmusic';
import { Card } from '../interface/card';
import { UpUser } from '../interface/up-user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL: string = "https://arnem-dev-sqqc.1.us-1.fl0.io"

  private URL_LOCALHOST: string = "http://localhost:8092"

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Usuario[]> {

    return this.http.get<Usuario[]>(this.URL_LOCALHOST+'/api/users')
    // return this.http.get<Usuario[]>(this.URL)
  }

  public register(user: Usuario) {
    return this.http.post(this.URL_LOCALHOST+'/api/users', user)
  }

  public findEmail(email: string): Observable<Usuario> {

    return this.http.get<Usuario>(this.URL_LOCALHOST + '/api/users/email/' + `${email}`)
  }
  
  public deleteUser(id: number) {

    return this.http.delete(this.URL_LOCALHOST + '/api/users/' + `${id}`)
  }

  /* public findId(id: number): Observable<Usuario> {

    // return this.http.get<Usuario>(`https://arnem-dev-sqqc.1.us-1.fl0.io/api/users/${id}`)
  } */

  public getlist(): Observable<List[]> {
    return this.http.get<List[]>(this.URL_LOCALHOST+'/song/list')
    // return this.http.get<List>('https://arnem-dev-sqqc.1.us-1.fl0.io/song/list')
  }

  public SignIn(user: SignInUser): Observable<Message> {
    return this.http.post<Message>(this.URL_LOCALHOST+'/api/login', user )
  }

  public getMusicList(): Observable<Listmusic[]> {
    return this.http.get<Listmusic[]>(this.URL_LOCALHOST+'/song/listncsmusic')
  }

  public getcards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.URL_LOCALHOST + '/cards/cartas')
  }

  public updateUser(user: UpUser): Observable<UpUser> {
    return this.http.put<UpUser>(this.URL_LOCALHOST + '/api/userupd/points/', user )
  }
}
