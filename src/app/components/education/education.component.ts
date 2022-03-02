import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {
  @Output() navigationInfo = new EventEmitter<object>();

  educationPageData: any = {
    selfEducation: [
      {
        categoryName: 'Courses',
        items: [
          {
            name: 'Angular - The Complete Guide',
            url: 'https://www.udemy.com/course/the-complete-guide-to-angular-2/'
          },
          {
            name: 'Advanced CSS and Sass: Flexbox, Grid, Animations!',
            url: 'https://www.udemy.com/course/advanced-css-and-sass/'
          },
          {
            name: 'Build Responsive Real World Websites with CSS3 v2.0',
            url: 'https://www.udemy.com/course/css3-responsive-web-design-tutorial-with-flexbox-and-animations/'
          },
          {
            name: 'The Complete Front-End Web Development Course!',
            url: 'https://www.udemy.com/course/front-end-web-development/'
          }
        ]
      },    
      {
        categoryName: 'Books',
        items: [
          {
            name: 'JavaScript: The Definitive Guide, 5th Edition',
            url: 'https://www.oreilly.com/library/view/javascript-the-definitive/0596101996/'
          }
        ]
      },    
    ],
    schoolEducation: [
      {
        name: 'Economic College "Virgil Madgearu"',
        specialization: 'Accounting',
        graduation: '2012',
        degree: 'Accountant',
        location: 'Targu Jiu'
      },
      {
        university: 'University "Constantin Brancusi"',
        name: 'Faculty of Economics Sciences and Bussiness Management',
        specialization: 'Economics, Trade, Tourism and Services(E.C.T.S.)',
        graduation: '2015',
        degree: 'Economist',
        location: 'Targu Jiu'
      },
    ]
  };  

  constructor() { }

  ngOnInit(): void {
  }
  
  onShow(value: string, isPage: boolean) {
    const navigationOptions = {
      section: value,
      isPage
    };
    this.navigationInfo.emit(navigationOptions);
  } 
}
