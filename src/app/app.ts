import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks';


@Component({
  selector: 'app-root',
  // imports: [HeaderComponent, UserComponent, TasksComponent,NgFor,NgIf],
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  selectedUserId!:string;
  // selectedUserId:string='u1';
  users=DUMMY_USERS;

  get selectedUser(){
    return  this.users.find((users)=>users.id===this.selectedUserId)!;
  }

  onSelectUser(id:string) {
    console.log("This is id: " + id);
    this.selectedUserId=id;
  }
}
