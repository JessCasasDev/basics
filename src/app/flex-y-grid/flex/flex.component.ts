import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss'],
})
export class FlexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getCatImage() {
    return (
      'http://thecatapi.com/api/images/get?format=src&timestamp=' +
      Math.random()
    );
  }
}
