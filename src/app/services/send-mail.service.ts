import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private url = 'https://sabine-detering.de/send_mail.php';

  constructor(private http: HttpClient) {
  }

  send(contact) {
    return this.http
      .post(this.url, JSON.stringify(contact));
  }
}
