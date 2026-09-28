import { Component,Input,signal,computed, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type User={
//   id:string,
//   avatar:string,
//   name:string    
// }

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // selectedUser=DUMMY_USERS[randomIndex]; //non-static

  // onSelectedUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }

  // get imagePath(){
  //   return 'users/' + this.selectedUser.avatar;
  // }



  /*------------------------ with signal-------------------- */
  // selectedUser=signal(DUMMY_USERS[randomIndex]); // reactive state

  // onSelectedUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // imagePath=computed(()=> 'users/' + this.selectedUser().avatar);
  /*------------------------------------------------------------ */



  /* ----------- using @input decorator-----------*/
  // @Input({required:true}) avatar!:string; 
  // @Input({required:true}) name!:string; 

  // onSelectedUser(){

  // }

  // get imagePath(){
  //   return 'users/' + this.avatar;
  // }
  /*----------------------------------------------- */

  
  /*-------------- with input (signal) ------------- */
  // avatar = input.required<string>();
  // name = input.required<string>();

  // onSelectedUser() {
  // }

  // imagePath = computed(() => {
  //   return 'users/' + this.avatar();
  // });
  /*----------------------------------------------- */


  /*------------------------------------------------- */
  // @Input({required:true}) id!:string; 
  // @Input({required:true}) avatar!:string; 
  // @Input({required:true}) name!:string; 
  // // @Output() select = new EventEmitter(); //older approach
  // select=output<string>(); // modern approach

  // onSelectedUser(){
  //   this.select.emit(this.id);
  // }

  // get imagePath(){
  //   return 'users/' + this.avatar;
  // }
   /*------------------------------------------------- */



  /** ---------------------------------*/
  @Input({ required: true }) user!: User;
  //@Output() select = new EventEmitter();
  select = output<string>();  

  onSelectedUser(){
    this.select.emit(this.user.id);
  }

  get imagePath(){
    return 'users/' + this.user.avatar;
  }
  /*--------------------------------- */

}
