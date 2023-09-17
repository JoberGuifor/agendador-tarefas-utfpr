import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../util/constants';
import { WebStorage } from '../util/web-storage';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {
  tasks!: Task[];
  private taskSource!: BehaviorSubject<number>;

  constructor() { 
    this.tasks = WebStorage.get(Constants.TASKS_KEY);
    this.taskSource = new BehaviorSubject<number>(this.tasks.length);
  }

  getTasks(): Task[] {
    this.tasks = WebStorage.get(Constants.TASKS_KEY);
    return this.tasks;
  }

  asObservable(): Observable<number> {
    return this.taskSource;
  }


}
