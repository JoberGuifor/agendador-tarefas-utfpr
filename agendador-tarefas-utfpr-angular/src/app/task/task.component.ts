import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent  implements OnInit, AfterViewInit {
  descricaoData: string = "Agendar no dia:";
  editando: boolean = false;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['id'] != undefined) {
        this.editando = true;
        this.id = params['id'];
     }
    });

  }

  ngAfterViewInit(): void {
  }

  onLogout() {
  }

  ngOnDestroy() {
  }
}
