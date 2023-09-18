import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject,AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();

  // username = new Subject<string>();
  username = new BehaviorSubject<string>('Demo');

  videoEmit = new ReplaySubject<string>(3,5000)//ReplaySubject(data,timing)

  asyncVideoEmit = new AsyncSubject();

  constructor() { }

  
  print(countVal,containerId){
    let el = document.createElement('li')
    el.innerText =  countVal
    document.getElementById(containerId).appendChild(el)
  }
}
