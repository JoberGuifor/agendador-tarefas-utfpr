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
export class DateSelectComponent implements OnInit, OnChanges {
  @Input() value: string = "Eventos do dia:";
  @Input() dataEvento: Date = new Date();
  @Output() dateChangeEvent = new EventEmitter<Date>();
  
  dataSelecionada: Date = new Date();

  constructor() {
    this.dataSelecionada = this.dataEvento;
  }

  ngOnChanges(): void {
    console.log("alterou data");
      this.dateChangeEvent.emit(this.dataSelecionada);
  }

  changeDate(): void {
    console.log("alterou data");
      this.dateChangeEvent.emit(this.dataSelecionada);
  }

  ngOnInit(): void {
    console.log(this.dataEvento);
  }

}
