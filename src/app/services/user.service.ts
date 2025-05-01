import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../shared/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userSubject = new BehaviorSubject<IUser | null>(null);
  user$ = this.userSubject.asObservable();

  login(user: IUser) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }

  getCurrentUser(): IUser | null {
    return this.userSubject.getValue();
  }
}
