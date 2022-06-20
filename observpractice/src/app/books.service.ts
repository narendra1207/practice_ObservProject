import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

apiUrls='/api/bookss';

  constructor(private _http:HttpClient) { }


  getBooks(){
return this._http.get<Book[]>(this.apiUrls);
  }
  getBooks1(){
return this._http.get<Book[]>(this.apiUrls);
  }
  getBooks2(){
return this._http.get<Book[]>(this.apiUrls);
  }
}
