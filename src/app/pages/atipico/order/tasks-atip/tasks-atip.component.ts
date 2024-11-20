import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../services/todo.service';
import { ITodo } from '../../../../models/ITodo';

@Component({
  selector: 'app-tasks-atip',
  templateUrl: './tasks-atip.component.html',
  styleUrl: './tasks-atip.component.css'
})
export class TasksAtipComponent implements OnInit{
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

  hasPendingTasks(): boolean {
    return this.tarefas.some((tarefa) => !tarefa.concluido);
  }

  hasCompletedTasks(): boolean {
    return this.tarefas.some((tarefa) => tarefa.concluido);
  }
}
