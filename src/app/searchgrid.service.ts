import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchgridService {


  constructor(private http: HttpClient) { }

  getusers(){
    return this.http.get( 'jsonplaceholder.typicode.com/users');
  }

  
}
