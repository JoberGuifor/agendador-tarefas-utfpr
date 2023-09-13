import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { BalanceTasksComponent } from './balance-tasks/balance-tasks.component';

const routes: Routes = [
  { path: 'list-tasks', component: ListTasksComponent },
  { path: 'task', component: TaskComponent },
  { path: '', component: ListTasksComponent },
  { path: '**', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
