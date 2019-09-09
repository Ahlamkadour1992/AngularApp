import { Injectable } from '@angular/core';
//To share data between the components i use rxjs/behaviorSubject
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private goals = new BehaviorSubject<any>(['The initial goal', 'Another life goal']);
goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
