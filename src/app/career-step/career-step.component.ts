import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-step',
  templateUrl: './career-step.component.html',
  styleUrls: ['./career-step.component.scss']
})
export class CareerStepComponent implements OnInit {

  @Input() step: { img: string; title: string; description: string; };
  @Input() delay: string;
  constructor() { }

  ngOnInit(): void {
  }

}
