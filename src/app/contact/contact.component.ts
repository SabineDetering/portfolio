import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';


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

  message: string;


  // constructor(private http: HttpClient) { }
  constructor() { }

  ngOnInit(): void {
  }


  sendMessage(formResult) {
  //   this.http
  //     .post('https://sabine.detering.developerakademie.net/portfolio/send_mail.php', {
  //       name: formResult.name,
  //       email: formResult.email,
  //       message: formResult.message,
  //     })
  //     .subscribe(
  //       (success: any) => {
  //         console.log('success');
  //         // this.openDialog(true);
  //         // this.contactForm.reset();
  //         // formDirective.resetForm();
  //       },
  //       (error: any) => {
  //         // this.openDialog(false);
  //         console.log('error');
  //       }
  //     );
  }
}
