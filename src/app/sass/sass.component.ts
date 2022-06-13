import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sass',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.scss'],
})
export class SassComponent implements OnInit {
  className = 'light';
  constructor() {}

  ngOnInit(): void {}

  change() {
    this.className = this.className === 'light' ? 'dark' : 'light';
  }
}
