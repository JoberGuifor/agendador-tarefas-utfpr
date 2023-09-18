import * as M from 'materialize-css';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onLogout() {
  }

  ngOnDestroy() {
  }
}
