import { Component, OnInit } from '@angular/core';
import { trigger, group, query, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss'],
  animations: [
    trigger('shiftFadeInAnimation', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateY(100%)'  }),
        group([
          animate(500, style({ opacity: '1' })),
          animate(125, style({ transform: 'translateY(0%)' }))
        ])
      ])
    ])
  ]
})
export class SkillSectionComponent implements OnInit {
  skills = [
    { 'name': 'JavaScript', 'img': 'javascript.png' },
    { 'name': 'Angular', 'img': 'angular.png' },
    { 'name': 'HTML / CSS', 'img': 'html.png' },
    { 'name': 'API (REST)', 'img': 'api.png' },
    { 'name': 'Bootstrap', 'img': 'bootstrap.svg' },
    { 'name': 'SQL', 'img': 'database.png' },
    { 'name': 'Git', 'img': 'git.png' },
    { 'name': 'sas', 'img': 'sas.png' },
    { 'name': 'Design Thinking', 'img': 'design.png' },
    { 'name': 'Scrum', 'img': 'scrum.png' },
    { 'name': 'Test Automation', 'img': 'test.png' },
    { 'name': 'Python', 'img': 'python.png' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
