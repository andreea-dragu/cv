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
      name: 'Signal Iduna',
      role: 'Health Insurance Agent',
      periodOfTime: 'february 2016 - may 2018'
    },
    {
      name: 'Neuron Technologies',
      role: 'Front-End Developer',
      periodOfTime: 'may 2018 - april 2021'
    },
    {
      name: 'Freelancer',
      role: 'Front-End Developer',
      periodOfTime: 'march 2021 - january 2022'
    },
    {
      name: 'Luxoft',
      role: 'Front-End Developer',
      periodOfTime: 'february 2022 - Current'
    }
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
