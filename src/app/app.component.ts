import { Component, HostListener } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent {
  darkTheme = false;
  scrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 86) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.darkTheme ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
    // console.log(this.darkTheme);
    // console.log(document.body);
  }

}
