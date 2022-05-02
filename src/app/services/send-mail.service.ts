import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private url = 'http://sabine-detering.developerakademie.net/portfolio/send_mail.php';

  constructor(private http: HttpClient) {
  }

  send(contact) {
    return this.http
      .post(this.url, JSON.stringify(contact));
  }
}
