import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../../../models/ITodo';
import { TodoService } from '../../../../services/todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tarefas: ITodo[] = [];

  constructor(private taskService:TodoService){

  }
  ngOnInit(): void{

    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      console.log(dado);
    });
  }

  AddTask(tarefa : ITodo){
    this.taskService.AddTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa)
    })
  }

  deleteTask(tarefa : ITodo){
    this.taskService.deleteTask(tarefa).subscribe(() =>
      (this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)));
  }

  toggleConcluido(tarefa : ITodo){
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }
}
