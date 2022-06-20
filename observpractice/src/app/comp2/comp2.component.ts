import { Component, OnInit } from '@angular/core';
import { Dataservice1Service } from '../dataservice1.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  myList2:number[]=[];


  constructor(private  dataservice1Service:Dataservice1Service) { }

  ngOnInit(): void {
    this.myList2=this.dataservice1Service.getList();
  }



  addNumber(val:any){
this.dataservice1Service.addnum(val);
this.myList2=this.dataservice1Service.getList();

  }
}
