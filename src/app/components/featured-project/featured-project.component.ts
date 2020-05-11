import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    console.log('data:', this.data)
  }

}
