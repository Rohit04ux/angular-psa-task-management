import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input ({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  isAddingTask:boolean=false;

  tasks = [
    {
      id:'t1',
      userId:'u1',
      title:'Adding login feature',
      summary:'login with otp, gmail and username',
      dueDate: '2026-06-28'
    },
     {
      id:'t2',
      userId:'u2',
      title:'Adding upload images',
      summary:'Per product max 15 images to be uploaded',
      dueDate: '2026-06-29'
    },
    {
      id:'t3',
      userId:'u1',
      title:'Adding upload product description',
      summary:'add product description',
      dueDate: '2026-06-29'
    }
  ];

  get selectedUserTasks(){
    return this.tasks.filter((t)=> t.userId===this.userId);
  }

  completTask(id: any) {
    this.tasks=this.tasks=this.tasks.filter((t)=>t.id!==id);
  }

  addNewTask(){
    this.isAddingTask=true;
  }

  cancelNewTask() {
    this.isAddingTask=false;
  }


  createTask(data: { title: string; summary: string; dueDate: string; }) {
    this.tasks.push({
        title:data.title,
        summary:data.summary,
        dueDate:data.dueDate,
        id:'t4',
        userId:'u1'
    });
    this.isAddingTask=false
  }
}
