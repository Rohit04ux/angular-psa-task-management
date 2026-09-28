import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { T } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required:true}) task!:T;
  @Output() complete=new EventEmitter();

  completeTask() {
    this.complete.emit(this.task.id);
    console.log("task completed!")
  }
}

