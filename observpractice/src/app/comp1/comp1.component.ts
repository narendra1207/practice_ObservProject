import { Component, OnInit } from '@angular/core';
import { Dataservice1Service } from '../dataservice1.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  myList1:number[]=[];


  constructor(private  dataservice1Service:Dataservice1Service) { }

  ngOnInit(): void {
    this.myList1=this.dataservice1Service.getList();
  }



  addNumber(val:any){
this.dataservice1Service.addnum(val);
this.myList1=this.dataservice1Service.getList();

  }
}
