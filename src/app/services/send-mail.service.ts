import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private url = 'http://sabine.detering.developerakademie.net/portfolio/send_mail.php';

  constructor(private http: HttpClient) {
  }

  send(name,email,message): Observable<any> {
    return this.http.post<any>(this.url, { 'name':name,'message':message });
  }
}
