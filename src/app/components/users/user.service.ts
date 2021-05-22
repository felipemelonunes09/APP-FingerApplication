import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  bURL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

    read(): Observable<User[]>{
      return this.http.get<User[]>(this.bURL)
    }

}
