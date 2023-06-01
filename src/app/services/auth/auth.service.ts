import { Injectable   } from '@angular/core';
import { AuthModule   } from 'src/app/modules/auth/auth.module';
import { HttpClient   } from '@angular/common/http'
import { Observable   } from 'rxjs';
import { Credentials  } from '../../shared/models/credentials.model';
import { User         } from '../../shared/models/user.model';

@Injectable({
  providedIn: AuthModule
})
export class AuthService {

  apiUrl: string = ''

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: Credentials): Observable<any> {
    return this.http.post(this.apiUrl, credentials)
  }

  register(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user)
  }
}
