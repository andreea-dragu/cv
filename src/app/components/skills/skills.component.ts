import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  @Output() navigationInfo = new EventEmitter<object>();

  skillsPageData: any = {
    skills: [
      {
        categoryName: 'Technologies',
        categorySkills: [
          'TypeScript',
          'JavaScript (ES6+)',
          'HTML',
          'CSS/SCSS'        
        ]
      },
      {
        categoryName: 'Framework',
        categorySkills: [
          'Angular'
        ]
      },
      {
        categoryName: 'Versioning',
        categorySkills: [
          'Git'
        ]
      }
    ],
    tools: ['Visual Studio Code', 'GitHub', 'Figma', 'Photoshop', 'Affinity Designer']
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
