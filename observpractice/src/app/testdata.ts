 
 import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Book } from './book';



 export class Testdata implements InMemoryDbService {
     createDb(){

     let bookDetails:Book[]=[

        {id:100, name:'Angular 10' , category:' Angular book'},
        {id:101, name:'Angular 10' , category:' Angular book'},
        {id:102, name:'Angular 10' , category:' Angular book'},
        {id:103, name:'Angular 10' , category:' Angular book'},
        {id:104, name:'Angular 10' , category:' Angular book'},
     ]   
    //  return  bookDetails;
    return {bookss:bookDetails}
     }
    
}
