import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public types = [
    { 'name': 'All', 'active': true },
    { 'name': 'Angular', 'active': false },
    { 'name': 'JavaScript', 'active': false }
  ];

  public projects = [
    { 'name': 'Quiz', 'type': 'JavaScript', 'img': '', 'description': 'Quiz App using Bootstrap', 'path': '' },
    { 'name': 'Tic Tac Toe', 'type': 'JavaScript', 'img': '', 'description': '', 'path': '' },
    { 'name': 'Pokédex', 'type': 'JavaScript', 'img': '', 'description': 'API', 'path': '' },
    { 'name': 'Join', 'type': 'JavaScript', 'img': '', 'description': 'A Kanban board using Bootstrap', 'path': '' },
    { 'name': 'Sharkie', 'type': 'JavaScript', 'img': '', 'description': 'Jump-and-Run-Game. Object-oriented.', 'path': '' },
    { 'name': 'Ring of Fire', 'type': 'Angular', 'img': '', 'description': 'The popular drinking game as app. Using Angular and Firebase. Multi User', 'path': '' },
    { 'name': 'CRM', 'type': 'Angular', 'img': '', 'description': '', 'path': ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }


  activate(i: number) {
    for (let index = 0; index < this.types.length; index++) {
      this.types[index].active = (index == i);
    }
     }

  meetsSearchCriteria(i: number) {
    let activeType = this.types.find(type => type.active);
    if (activeType.name == 'All') {
      return true;
    } else {
      return activeType.name == this.projects[i].type;
    }
  }
}
