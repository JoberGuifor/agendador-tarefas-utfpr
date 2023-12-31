import { AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-balance-tasks',
  templateUrl: './balance-tasks.component.html',
  styleUrls: ['./balance-tasks.component.css']
})
export class BalanceTasksComponent  implements OnInit, OnChanges{
  @Input() value: number = 0;
  @Output() donationEvent = new EventEmitter<boolean>();
  backgroundColor = 'amber';

  constructor() {}

  ngOnChanges(): void {
    if (this.value > 10000)
      setTimeout(() => {
        this.donationEvent.emit(true);
      }, 3000);
  }

  ngOnInit(): void {}

  onDblClickBalance(color: string) {
    this.backgroundColor = color;
  }

  getBackgroundColor() {
    return this.backgroundColor;
  }
}