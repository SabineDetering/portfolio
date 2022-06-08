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
      'name': 'Dogschool CRM',
      'type': 'Angular',
      'img': 'dogschoolcrm.png',
      'description1': 'A CRM-app for dogschools based on Angular, Material Design and Firebase.',
      'description2': 'The app gives an overview of clients, their dogs and trainings.',
      'description_short': 'CRM-app based on Angular and Material Design',
      'path': 'https://dogschool-crm.web.app/'
    },
    {
      'name': 'Ring of Fire',
      'type': 'Angular',
      'img': 'ringoffire.png',
      'description1': 'The popular drinking game as multi-user-app based on Angular and Firebase.',
      'description2': 'By drawing cards in turns, the players get instructions on who should have a drink.',
      'description_short': 'Multi-user-app based on Angular and Firebase',
      'path': 'https://ringoffire-5119d.web.app/'
    },
    {
      'name': 'Sharkie',
      'type': 'JavaScript',
      'img': 'sharkie.png',
      'description1': 'Object-oriented jump-and-run-game based on JavaScript.',
      'description2': 'Sharkie is a friendly shark, but to survive he must evade or fight his enemies. ',
      'description_short': 'Jump-and-run-game based on OOP with JavaScript.',
      'path': 'https://sabine-detering.de/sharkie/index.html'
    },
    {
      'name': 'Pokédex',
      'type': 'JavaScript',
      'img': 'pokedex.png',
      'description1': 'Based on Javascript and a RESTful API.',
      'description2': 'The user gets information on selected properties of his favorite (or all) pokémon.',
      'description_short': 'Based on Javascript and a RESTful API.',
      'path': 'https://sabine-detering.de/pokedex/index.html'
    },
    {
      'name': 'Join',
      'type': 'JavaScript',
      'img': 'join.png',
      'description1': 'A Kanban board based on JavaScript and Bootstrap.',
      'description2': 'The board gives an overview over the current tasks in a project by showing the status, assignments and other informations.',
      'description_short': 'A Kanban board based on JavaScript and Bootstrap.',
      'path': 'https://sabine-detering.de/join/index.html'
    },
    {
      'name': 'Portfolio',
      'type': 'Angular',
      'img': 'portfolio.png',
      'description1': 'This page was built with Angular.',
      'description2': 'Get to know me and my projects.',
      'description_short': 'This page was built with Angular.',
      'path': 'https://sabine-detering.de/index.html'
    },
    // {
    //   'name': 'Quiz',
    //   'type': 'JavaScript',
    //   'img': 'quiz.png',
    //   'description1': 'Quiz-App based on JavaScript and Bootstrap.',
    //   'description2': 'Test your knowledge about dogs.',
    //   'description_short': 'Quiz App based on JavaScript and Bootstrap.',
    //   'path': 'https://sabine-detering.de/quiz/index.html'
    // },
    // {
    //   'name': 'Tic Tac Toe',
    //   'type': 'JavaScript',
    //   'img': 'tictactoe.png',
    //   'description1': 'The well-known game based on Javascript.',
    //   'description2': 'Play with a friend or against the computer on 2 difficulty levels.',
    //   'description_short': 'Play alone on 2 difficulty levels or with a friend.',
    //   'path': 'http://sabine-detering.developerakademie.net/tictactoe/index.html'
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * the clicked project type is marked as active, all others as inactive
   * @param i - index of the type to activate
   */
  activate(i: number) {
    for (let index = 0; index < this.types.length; index++) {
      this.types[index].active = (index == i);
    }
  }


  /**
   * filters the projects that meet the clicked type
   * @param i - index of project
   * @returns boolean - true, if project is of the active type
   */
  meetsSearchCriteria(i: number) {
    let activeType = this.types.find(type => type.active);
    if (activeType.name == 'All') {
      return true;
    } else {
      return activeType.name == this.projects[i].type;
    }
  }
}
