import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeTab: string = 'new';

  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tabTitle: string) {
    this.activeTab = tabTitle;
  }

  isTabActive(tabTitle: string): boolean {
    return (tabTitle == this.activeTab)? true : false;
  }
}
 