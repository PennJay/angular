import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }
set(a,value){
  localStorage.setItem(a,JSON.stringify(value));
  console.log(JSON.stringify(value));

}

}