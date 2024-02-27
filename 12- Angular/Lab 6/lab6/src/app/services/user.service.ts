import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  addUser(user: IUser): Observable<any> {
    return this.http.post<any>(
      'http://localhost:59637/users',
      JSON.stringify(user),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/' }),
      }
    );
  }
}
