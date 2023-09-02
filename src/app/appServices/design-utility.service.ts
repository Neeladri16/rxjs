import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  
  print(countVal,containerId){
    let el = document.createElement('li')
    el.innerText =  countVal
    document.getElementById(containerId).appendChild(el)
  }
}
