import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancelTask=new EventEmitter<void>();
  @Output() addTask=new EventEmitter<
    {
      title:string;
      summary:string;
      dueDate:string;
    }>();

  
  cancelTasks() {
    this.cancelTask.emit();
  }

  enteredTitle:string='';
  enteredSummary:string='';
  enteredDueDate:string='';

  
  // enteredTitle=signal('');
  // enteredSummary=signal('');
  // enteredDueDate=signal('');


  taskSubmit() {
    console.log(this.enteredTitle,this.enteredSummary,this.enteredDueDate);
    console.log("new tasked added successfully")
     
    this.addTask.emit(
      {
        title:this.enteredTitle,
        summary:this.enteredSummary,
        dueDate:this.enteredDueDate
      }
    );  
  }
}
