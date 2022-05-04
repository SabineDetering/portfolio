import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  hover: boolean = false;
  @Input() project: any;
  
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  openLink(path){
    window.open(path,'_blank');
  }

}
