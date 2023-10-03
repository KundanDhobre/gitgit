import { Injectable } from '@angular/core';
export class Customer {
  ID!: number;

   Name!: string;
   Username!: string; 
   Email!: string;
    phone!: number;
​
  
}
​
const customers: Customer[] = [{
  ID: 1,
  Name: 'Kundan',
  Username: ' Amolchand',
  Email:'kund@gmail.com',
  phone:8421405223,
​
 
}, 

{
  ID: 2,
  Name: 'Shubham',
  Username: ' Amolchand',
  Email:'shubham@gmail.com',
  phone:8421405223,
​
 
} ,{
  ID: 3,
  Name: 'Ajay',
  Username: ' Khilji',
  Email:'ajay@gmail.com',
  phone:8421405223,
​
 
} ];

@Injectable({
  providedIn: 'root'
})
export class ColumService {

  getCustomers() {
    return customers;
  }
}
