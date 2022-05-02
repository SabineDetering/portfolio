import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SendMailService } from '../services/send-mail.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public mailSent = false;

  // constructor(private http: HttpClient) { }
  constructor(private sendMail: SendMailService) { }
  // constructor() { }

  ngOnInit(): void {
  }

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


  // sendMessage(formResult) {
  //   this.http
  //     .post('http://sabine-detering.developerakademie.net/portfolio/send_mail.php',
  //       {
  //         name: formResult.name,
  //         // email: formResult.email,
  //         message: formResult.message,
  //       }
  //       // formResult
  //     )
  //     .subscribe(
  //       (success: any) => {
  //         console.log('success');
  //         this.mailSent = 'success';
  //         // this.openDialog(true);
  //         // this.contactForm.reset();
  //         // formDirective.resetForm();
  //       },
  //       (error: any) => {
  //         // this.openDialog(false);
  //         console.log('error', error);
  //         this.mailSent = 'error';
  //       }
  //     );
  // }
}
