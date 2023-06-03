import { Injectable   } from '@angular/core';
import { HttpClient   } from '@angular/common/http'
import { Observable   } from 'rxjs';
import { Credentials  } from '../../shared/models/credentials.model';

@Injectable()
export class AuthService {

  apiUrl: string = 'http://31.187.76.251:3000/'

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: Credentials): Observable<any> {
    return this.http.post(this.apiUrl, credentials)
  }

  register(credentials: Credentials): Observable<any>{
    let url = `${this.apiUrl}register`;
    let cred = { email: credentials.username, password: credentials.password}
    return this.http.post<any>(url, cred)
  }
}
