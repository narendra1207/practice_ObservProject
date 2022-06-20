import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  recieveBook:Book[];
  recieveBook1:Book[];
  constructor(private _booksService:BooksService ) { }

  ngOnInit(): void {
debugger
    this._booksService.getBooks().subscribe(res=>
      {debugger;
      this.recieveBook=res}
      );
    this._booksService.getBooks1().subscribe(res=>
      {debugger;
        this.recieveBook1=res}
      );

  }

recieveAllBook(){}


}
