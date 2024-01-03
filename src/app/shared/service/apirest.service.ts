import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(): Observable<any[]> {
    return this.http.get<any[]>('https://arnem-dev-sqqc.1.us-1.fl0.io/api/users', {responseType: 'json'})
  }

  public register(URL:string, user: Object) {

    return this.http.post(URL,user, {responseType: 'json'})
  }

  public findEmail(email: string): Observable<any> {

    return this.http.get<any>(`https://arnem-dev-sqqc.1.us-1.fl0.io/users/email/${email}`)
  }

  public deleteUser(id: Number) {

    return this.http.delete(`https://arnem-dev-sqqc.1.us-1.fl0.io/users/${id}`)
  }

  public findId(id: Number): Observable<any> {

    return this.http.get<any>(`https://arnem-dev-sqqc.1.us-1.fl0.io/users/${id}`)
  }

}
