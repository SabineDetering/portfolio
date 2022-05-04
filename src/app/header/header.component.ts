import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * executes click function on the checkbox that controls the menu to hide sidebar menu
   */
  hideSidebarMenu() {
    document.getElementById('openSidebarMenu').click();
  }

}
