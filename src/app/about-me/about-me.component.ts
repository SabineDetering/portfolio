import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

careerSteps=[
  {
    img: 'assets/img/walk.png',
    title: 'My Journey Began',
    description: 'By studying Business Mathematics I layed a strong foundation in analytical thinking and built a first project programming Artificiel Intelligence.'
  },
  {
    img: 'assets/img/heart.png',
    title: 'My Passion',
    description: 'During my career in the banking industry I enjoyed the time programming data analyses and automating reporting processes.'
  },
  {
    img: 'assets/img/search.png',
    title: 'My Search',
    description: 'Working as a freelance math teacher I was looking for new challenges in software development.I got professional training as Frontend Developer and coded several websites and apps, alone and in a team. '
  },
  {
    img: 'assets/img/takeoff.png',
    title: 'New Challenges',
    description: 'Now I am looking for an opportunity as junior developer to build on my experience and continue learning. '
  }
]

constructor() { }

ngOnInit(): void {
}

}
