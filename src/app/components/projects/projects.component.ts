import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Output() navigationInfo = new EventEmitter<object>();

  myProjectsPageData: any = [
    {
      name: 'CookeryBook',
      url: 'https://andreea-dragu.github.io/CookeryBook/',
      repoUrl: 'https://github.com/andreea-dragu/CookeryBook',
      imgUrl: 'https://repository-images.githubusercontent.com/459119530/eb8800b5-58cc-4fa8-97c4-0638ad418749',
      description: 'This project is made with Angular and you can find features like adding & deleting a recipe, search and sort recipes, pagination, modals, slider and so on...'
    },
  ];

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
