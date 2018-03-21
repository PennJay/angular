import { Component } from '@angular/core';
import { LocalstorageService } from './services/localstorage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private todolist:Array<any>;
  private data:Array<any>;

constructor(
  public set:LocalstorageService,
  public remove:LocalstorageService
){
}



getData(event){
    this.todolist=event;
    this.data=this.todolist;
    //console.log(this.data);
  }
  
}
