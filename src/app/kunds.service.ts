import { Injectable } from '@angular/core';


export class Employee {
  ID: number | undefined;
  FirstName: string | undefined;
  LastName: string | undefined;
  Prefix: string | undefined;
  Position: string | undefined;
  BirthDate: string | undefined;
  State: string | undefined;
}

const employees: Employee[] = [{
      ID: 1,
      Prefix: 'Mr.',
      FirstName: 'Kundan',
      LastName: 'Dhobre',
      Position: 'CEO',
      State: 'California',
      BirthDate: '1997/03/10',
  },
  {
      ID: 2,
      Prefix: 'Mrs.',
      FirstName: 'Ajay',
      LastName: 'Peyton',
      Position: 'Sales Assistant',
      State: 'California',
      BirthDate: '1981/06/03',
  },
  {
      ID: 3,
      Prefix: 'Mr.',
      FirstName: 'Robert',
      LastName: 'Reagan',
      Position: 'CMO',
      State: 'Arkansas',
      BirthDate: '1974/09/07',
  },
  {
      ID: 4,
      Prefix: 'Ms.',
      FirstName: 'Greta',
      LastName: 'Sims',
      Position: 'HR Manager',
      State: 'Georgia',
      BirthDate: '1977/11/22',
  }];

@Injectable({
  providedIn: 'root'
})
export class KundsService {
  
  getEmployees() {
    return employees;
}

}
