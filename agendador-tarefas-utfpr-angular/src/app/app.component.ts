import * as M from 'materialize-css';

import {  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'agendador-tarefas-utfpr-angular';
  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  ngAfterViewInit(): void {
      let $sideNav = $('#mobile-demo');
  }

  onClick(){
    alert("você disparou um event");
  }
}
