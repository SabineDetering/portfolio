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

    {
      'name': 'Ring of Fire',
      'type': 'Angular',
      'img': 'ringoffire.png',
      'description1': 'The popular drinking game as multi-user-app based on Angular and Firebase.',
      'description2': 'By drawing cards in turns, the players get instruction on who should have a drink.',
      'path': ''
    },
    {
      'name': 'Sharkie',
      'type': 'JavaScript',
      'img': 'sharkie.png',
      'description1': 'Object-oriented Jump-and-Run-Game based on JavaScript.',
      'description2': 'Sharkie is a friendly shark, but to survive he must evade or fight his enemies. ',
      'path': ''
    },
    {
      'name': 'Pokédex',
      'type': 'JavaScript',
      'img': 'pokedex.png',
      'description1': 'Based on Javascript and an API(REST).',
      'description2': 'The user gets information on selected properties of his favorite (or all) pokémon.',
      'path': ''
    },
    {
      'name': 'Join',
      'type': 'JavaScript',
      'img': 'join.png',
      'description1': 'A Kanban board based on JavaScript and Bootstrap.',
      'description2': 'The board gives an overview over the current tasks in a project by showing the status, assignments and other informations.',
      'path': ''
    },
    {
      'name': 'Quiz',
      'type': 'JavaScript',
      'img': 'quiz.png',
      'description1': 'Quiz App based on JavaScript and Bootstrap.',
      'description2': 'Test your knowledge about dogs.',
      'path': ''
    },
    {
      'name': 'Tic Tac Toe',
      'type': 'JavaScript',
      'img': 'tictactoe.png',
      'description1': 'The well-known game based on Javascript.',
      'description2': 'Play with a friend or against the computer on 2 difficulty levels.',
      'path': ''
    }
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
