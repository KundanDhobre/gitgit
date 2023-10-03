import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskservicesService {

  constructor(private http:HttpClient) { }
    getusers(){
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    
  }

}
