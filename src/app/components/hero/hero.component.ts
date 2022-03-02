import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
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

  onDisplayCurrentAge(birthday: string) {
    const birthDate = new Date(birthday);
    const diff = Date.now() - birthDate.getTime();
    const ageDate = new Date(diff);
    const currentAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    return currentAge;
  }
}
