import { Component, OnInit } from '@angular/core';
import { AppConstants } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private title?: String;

  constructor(private constants: AppConstants) { }

  ngOnInit(): void {
    this.title = this.constants.TITLE;
  }

}
