import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Output() navigationInfo = new EventEmitter<object>();

  workPageData: any = [
    {
      name: 'Spectrum Creations',
      role: 'Front-End Developer',
      periodOfTime: '2016 - 2018'
    },
    {
      name: 'Neuron Technologies',
      role: 'Front-End Developer',
      periodOfTime: '2018 - 2020'
    },    
    {
      name: 'Freelancer',
      role: 'Front-End Developer',
      periodOfTime: '2020 - Current'
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
