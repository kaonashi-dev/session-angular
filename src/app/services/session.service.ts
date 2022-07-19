import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private key: string;

  constructor() {
    this.key = 'user_session';
  }

  isLoggedIn():boolean {
    const value: string | null = localStorage.getItem(this.key);
    return (value) ? true : false;
  }

  save(token: string) {
    localStorage.setItem(this.key, token);
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}
