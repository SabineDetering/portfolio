import { Component, Input, OnInit } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() index: number;
  @Input() projects: any[];
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
