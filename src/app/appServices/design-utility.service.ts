import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();

  // username = new Subject<string>();
  username = new BehaviorSubject<string>('Demo');



  constructor() { }

  
  print(countVal,containerId){
    let el = document.createElement('li')
    el.innerText =  countVal
    document.getElementById(containerId).appendChild(el)
  }
}
