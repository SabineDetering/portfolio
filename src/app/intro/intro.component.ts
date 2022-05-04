import { Component, OnInit } from '@angular/core';
import { trigger, sequence, query, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('entry', [
      transition(':enter', [
        query('.changecolor', style({ color: 'white' })),
        query('.insert', style({ opacity: '0', width: '0%' })),
        query('.contact-btn', style({ opacity: '0' })),
        sequence([
          query('.highlight',
            animate('300ms 100ms linear',
              style({ width: '100%', borderRight: '4px solid white' }))),
          query('.highlight',
            animate('0ms 10ms ease-in-out',
              style({ width: '100%', borderRight: '0px ' }))),
          query('.changecolor',
            animate('5ms 300ms', style({ color: 'var(--primary)' }))),
          query('.right-from-insert',
            animate('50ms 50ms',
              style({ borderLeft: '4px solid white' }))),
          query('.insert',
            animate('50ms 50ms ease-in-out',
              style({ width: '80px', opacity: '0' }))),
          query('.insert',
            animate('50ms 50ms',
              style({ opacity: '1' }))),
          query('.contact-btn',
            animate('250ms 150ms ease-in-out',
              style({ opacity: '1' })))
        ])
      ])
    ]),
    trigger('arrowAnimation', [
      transition(':enter', [
        style({ opacity: '0' }),
        sequence([
          animate('125ms 1400ms ease-in-out', style({ opacity: '1' })),
          animate('3s 0s ease-in', style({ opacity: '0' })),
          animate('3s 0s ease-out', style({ opacity: '1' })),
          animate('3s 0s ease-in', style({ opacity: '0' })),
          animate('3s 0s ease-out', style({ opacity: '1' })),
        ])
      ])
    ])
  ]
})



export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
