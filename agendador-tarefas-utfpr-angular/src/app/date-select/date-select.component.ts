import { AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.css']
})
export class DateSelectComponent implements OnInit, OnChanges{
  @Input() value: string = "Eventos do dia:";
  @Output() dateChangeEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnChanges(): void {
      this.dateChangeEvent.emit(true);
  }

  ngOnInit(): void {}

}
