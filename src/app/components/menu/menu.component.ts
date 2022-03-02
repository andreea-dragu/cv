import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() navigationInfo = new EventEmitter<object>();

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
