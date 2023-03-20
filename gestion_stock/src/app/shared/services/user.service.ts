import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `http://localhost:8080/user/getAllUsers`
    );
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(
      `http://localhost:8080/user/getUserById/${id}`
    );
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(
      `http://localhost:8080/user/addUser`,
      user
    );
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put(`http://localhost:8080/user/updateUser`, user);
  }

  getUserByNom(nom: string): Observable<User> {
    return this.httpClient.get<User>(
      `http://localhost:8080/user/getUserByNom/${nom}`
    );
  }

  deleteUserById(id: number): void {
     this.httpClient.delete(
      `http://localhost:8080/user/deleteUserById/${id}`
    );
  }
}
