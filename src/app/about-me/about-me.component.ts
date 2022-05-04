import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public careerSteps: { img: string; title: string; description: string; }[] =[
  {
    'img': 'walk.png',
    'title': 'My Journey Began',
    'description': 'Studying Business Mathematics boosted my talent for structured and analytical thinking. I coded my first project with Delphi, solving a problem with Artificial Intelligence.'
  },
  {
    'img': 'heart.png',
    'title': 'First Experiences',
    'description': 'During my career in the banking industry, programming was all about data analyses and predictive modeling. I enjoyed automating processes for more efficiency in modeling and reporting.'
  },
  {
    'img': 'search.png',
    'title': 'My Search',
    'description': 'Looking for new challenges in software development, I got professional training as a front-end developer. At Developer Akademie, I coded several websites and apps, alone and in teams. '
  },
  {
    'img': 'takeoff.png',
    'title': 'New Challenges',
    'description': 'Now I am eager to apply my experience with JavaScript, HTML/CSS, and Angular as a junior developer.'
  }
]

constructor() { }

ngOnInit(): void {
}

}
