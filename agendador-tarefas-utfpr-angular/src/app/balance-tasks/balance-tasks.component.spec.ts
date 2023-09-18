import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTasksComponent } from './balance-tasks.component';

describe('BalanceTasksComponent', () => {
  let component: BalanceTasksComponent;
  let fixture: ComponentFixture<BalanceTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceTasksComponent]
    });
    fixture = TestBed.createComponent(BalanceTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
