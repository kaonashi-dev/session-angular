import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService) { }

  login(user: string, pass: string): Observable<any> {
    return this.apiService.post('login.php', {
      user,
      pass
    });
  }
}
