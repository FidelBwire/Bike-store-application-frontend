import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.css']
})
export class PageTopComponent implements OnInit {

  @Input()
  currentActive: string = 'Dashboard';

  constructor() { }

  ngOnInit(): void {
  }

}
