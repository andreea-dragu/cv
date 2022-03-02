import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  hero: boolean = true;
  menu: boolean = false;
  pages: any = {
    active: false,
    items: {
      skills: false,
      work: false,
      education: false,
      myProjects: false,
    }
  };

  show(event: any) {
    console.log(event);
    if (event.isPage === false) {
      this.pages.active = false;
      this.menu = (event.section === 'hero') ? false : true;
      this.hero = (event.section === 'menu') ? false : true;
    } else {
      this.hero = false;
      this.menu = false;
      this.pages.active = true;
      for (const key in this.pages.items) {
        this.pages.items[key] = (key === event.section) ? true : false;
      }
    }
  }  
}
