import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: BehaviorSubject<boolean>;
  constructor() {
    this.user = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  get isUserLogged() {
    return localStorage.getItem('token') ? true : false;
  }

  login(userEmail: string, password: string) {
    let backendToken: string = 'hellouser';
    localStorage.setItem('token', backendToken);
    this.user.next(true);
  }
  logout() {
    localStorage.removeItem('token');
    this.user.next(false);
  }

  getUserState(): Observable<boolean> {
    return this.user.asObservable();
  }
}
