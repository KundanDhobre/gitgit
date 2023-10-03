import { Injectable } from '@angular/core';

export class Status {
  id: number | undefined;

  name: string | undefined;
}

const statuses: Status[] = [{
  id: 1, name: 'Not Started',
}, {
  id: 2, name: 'In Progress',
}, {
  id: 3, name: 'Deferred',
}, {
  id: 4, name: 'Need Assistance',
}, {
  id: 5, name: 'Completed',
},
];

@Injectable({
  providedIn: 'root'
})
export class NewradioService {
  getStatuses(): Status[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  atuses() {
    return statuses;
  }
}
