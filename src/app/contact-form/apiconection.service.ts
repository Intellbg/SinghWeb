import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiconectionService {
  mailApi = "https://formspree.io/f/xnqwjlql";
  constructor(private http: HttpClient) { }

  sendMail(message: any) {
    return this.http.post(this.mailApi, message, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            return response;
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}

