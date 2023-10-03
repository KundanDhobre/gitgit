import { Injectable } from '@angular/core';
export class Task {
  id: number| undefined;

  text: string | undefined;
}

const tasks: Task[] = [
  { id: 1, text: 'Kundan' },
  { id: 2, text: 'Shubham' },
  { id: 3, text: 'Ajay' },
  { id: 4, text: 'Saumya' },
  { id: 5, text: 'Himayu' },
  { id: 6, text: 'Banarasi Babu' },
  { id: 7, text: 'Brochure Design Review' },
  { id: 8, text: 'Website Re-Design Plan' },
  
 
];

@Injectable({
  providedIn: 'root'
})
export class AjayService {

  getTasks(): Task[] {
    return tasks;
  }

 
}
