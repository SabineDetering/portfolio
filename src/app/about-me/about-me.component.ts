import { Component, Input, OnInit } from '@angular/core';

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
    'description': 'Studying Business Mathematics boosted my talent for structured and analytical thinking. I built a first project with Delphi, solving a problem with Artificiel Intelligence.'
  },
  {
    'img': 'heart.png',
    'title': 'My Passion',
    'description': 'During my career in the banking industry, programming was all about data analyses and predictive modelling. I enjoyed automating processes for more efficiency in modelling and reporting.'
  },
  {
    'img': 'search.png',
    'title': 'My Search',
    'description': 'Looking for new challenges in software development, I got professional training as Frontend Developer. At Developer Akademie I coded several websites and apps, alone and in a team. '
  },
  {
    'img': 'takeoff.png',
    'title': 'New Challenges',
    'description': 'Now I am looking for an opportunity as junior developer to build on my experience with JavaScript, HTML/CSS and Angular, and continue learning. '
  }
]

constructor() { }

ngOnInit(): void {
}

}
