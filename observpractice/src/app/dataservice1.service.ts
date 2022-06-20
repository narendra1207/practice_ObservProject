import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dataservice1Service {

list:number[]=[100]

  constructor() { }

  addnum(num:number){
    this.list.push(num)
  }

getList(){
 return this.list;
}

}
