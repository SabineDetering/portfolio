import { Component, OnInit } from '@angular/core';
import { SendMailService } from '../services/send-mail.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public mailSent = false;

  constructor(private sendMail: SendMailService) { }

  ngOnInit(): void {
  }


  /**
   * uses sendMail Service to post message 
   * @param formResult:{name:string, email:string,message:string} - form data 
   */
  submitForm(formResult) {
    console.log(formResult);
    this.sendMail.send(formResult)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => {
          console.info('send post complete');
          this.mailSent = true;
        }
      });
  }


  /**
   * setting mailSent to false resets the contact form and shows it again
   */
  resetForm() {
    this.mailSent = false;
  }
}
