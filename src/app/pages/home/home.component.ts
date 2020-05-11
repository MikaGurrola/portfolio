import { Component, OnInit } from '@angular/core';
import work from '../../static-json/projects.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portfolio;
  
  constructor() { }

  ngOnInit(): void {
    this.portfolio = work
  }

}
