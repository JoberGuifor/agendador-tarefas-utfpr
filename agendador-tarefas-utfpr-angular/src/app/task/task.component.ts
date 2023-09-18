import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';
import { NgForm } from '@angular/forms';
import { DateSelectComponent } from '../date-select/date-select.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent  implements OnInit, AfterViewInit {

  @ViewChild('form') form!: NgForm;
  @ViewChild(DateSelectComponent)
  dateSelectComponent!: DateSelectComponent;

  value: number = 0;
  descricaoData: string = "Agendar no dia:";
  editando: boolean = false;
  id: number = 0;
  taskInvalid = false;
  taskMessage = '';
  descriptTask = '';
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
  ) {
    this.task = new Task(new Date());
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['id'] != undefined) {
        this.editando = true;
        this.id = params['id'];

        this.taskService.getById(this.id)
          .subscribe(
            (task) => {
              this.task = task;
              console.log(task.description);
            },
            (error) => {
              console.log(error);
            }
          );
     }
    });

  }

  ngAfterViewInit(): void {
  }

  onLogout() {
  }

  ngOnDestroy() {
  }

  onSubmit() {
    
    this.task.date = this.dateSelectComponent.dataSelecionada;

    if(this.editando){
      this.taskService.saveOrUpdate(this.task).subscribe(
        (data) => {
          this.taskInvalid = false;
          this.taskMessage = 'Cadastro alterado com sucesso!';
          this.form.reset();
          this.task = new Task(new Date());
        },
        (error) => {
          alert('Houve um erro ao alterar!');
        });
    }else{
      this.taskService.save(this.task).subscribe(
        (data) => {
          this.taskInvalid = false;
          this.taskMessage = 'Cadastro realizado com sucesso!';
          this.form.reset();
          this.task = new Task(new Date());
        },
        (error) => {
          alert('Houve um erro!');
        });
    }
  }

  onResetClick() {

  }


}

