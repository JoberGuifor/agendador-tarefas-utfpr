import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../model/task';
import { TaskPromisseService } from '../service/task-promisse.service';
import { DateSelectComponent } from '../date-select/date-select.component';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
  providers: [TaskPromisseService ]
})
export class ListTasksComponent implements OnInit{
  descricaoData: string = "Eventos no dia:";
  tasks?: Task[];
  isLoadData = false;
  dataBusca: Date ;
  dataStr: string;

  @ViewChild(DateSelectComponent)
  dateSelectComponent!: DateSelectComponent;

  constructor(private taskPromisseService: TaskPromisseService) {
    this.dataBusca = new Date();
    this.dataStr = "";
  }

  ngOnInit(): void {
    this.reloadTasks();

  }

  reloadTasks():void{
    console.log(typeof(this.dataBusca));
    
    if(typeof(this.dataBusca) != "string"){
      this.dataStr = this.dateToYMD(this.dataBusca);
    }else{
      this.dataStr = this.dataBusca;
    }

    this.taskPromisseService
      .getTasksByDate(this.dataStr)
      //.getTasks()
      .subscribe(
        (tasks) => {
          this.tasks = tasks;
          this.isLoadData = true;
        },
        (error) => {
          console.log(error);
        }
      );
    
  }

  changeDateList(event: Date): void{
    this.dataBusca = event;
    console.log(event);
    this.reloadTasks();
  }

  dateToYMD(date: Date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

}
