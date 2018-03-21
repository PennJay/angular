import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
gettodolist=new LocalstorageService();
  constructor(
  ) { 
    }
    @Output() event=new EventEmitter();
    content='';
    todolist=[];

    up(){
      this.todolist.push(this.content);
      this.gettodolist.set('todolist',this.todolist);
      this.content = '';
      this.event.emit(this.todolist);
     
    
    }
  


  ngOnInit() {
  
  }
}
