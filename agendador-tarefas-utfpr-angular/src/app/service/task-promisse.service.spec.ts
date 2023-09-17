import { TestBed } from '@angular/core/testing';

import { TaskPromisseService } from './task-promisse.service';

describe('TaskPromisseService', () => {
  let service: TaskPromisseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskPromisseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
