import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebStorage } from 'src/app/util/web-storage';
import { Constants } from 'src/app/util/constants';

@Injectable()
export class TaskService {

  URL = 'http://localhost:3000/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  listTasks(): Observable<Task[]> {    
    return this.httpClient.get<Task[]>(`${this.URL}`);
  }

  getById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.URL}/${id}`);
  }

  save(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.URL, task, this.httpOptions);
  }

  saveOrUpdate(task: Task): Observable<Task> {
    if (task.id) {
      return this.update(task);
    } else {
      return this.save(task);
    }
  }

  patch(task: Task): Observable<Task> {
    return this.httpClient.patch<Task>(
      `${this.URL}/${task.id}`,
      task,
      this.httpOptions
    );
  }

  update(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(
      `${this.URL}/${task.id}`,
      task,
      this.httpOptions
    );
  }

}
