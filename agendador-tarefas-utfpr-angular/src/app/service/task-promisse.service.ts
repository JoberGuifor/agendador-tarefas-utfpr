import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable, of } from 'rxjs';

@Injectable()
export class TaskPromisseService {

  URL = 'http://localhost:3000/tasks';
  URL_BY_DATE = 'http://localhost:3000/tasks/date';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.URL}/${id}`);
  }

  getTasks(): Observable<Task[]> {    
    return this.httpClient.get<Task[]>(`${this.URL}`);
  }

  getTasksByDate(data: string): Observable<Task[]> {    
    return this.httpClient.get<Task[]>(`${this.URL_BY_DATE}/${data}`);
  }

  save(task: Task): Observable<Task> {
    return this.httpClient
      .post<Task>(
        this.URL,
        JSON.stringify(task),
        this.httpOptions
      );
  }

  patch(task: Task): Observable<Task> {
    return this.httpClient
      .patch<Task>(
        this.URL,
        JSON.stringify(task),
        this.httpOptions
      );
  }

  update(task: Task): Observable<Task> {
    return this.httpClient
      .put<Task>(this.URL, JSON.stringify(task), this.httpOptions);
  }
}
