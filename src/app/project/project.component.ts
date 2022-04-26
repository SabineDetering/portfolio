import { Component, Input, OnInit } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  hover: boolean = false;
  // @Input() index: number;
  @Input() project: any;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
