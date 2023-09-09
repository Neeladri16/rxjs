import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject-and-behaviour',
  templateUrl: './subject-and-behaviour.component.html',
  styleUrls: ['./subject-and-behaviour.component.scss']
})
export class SubjectAndBehaviourComponent implements OnInit,OnDestroy{
  userName:string;
  constructor(private _du: DesignUtilityService){
    this._du.username.subscribe(res=>{
        this.userName =res;
    })
  }
  
  ngOnInit(): void {

    this._du.exclusive.next(true)
  }
 
  ngOnDestroy(): void {

    this._du.exclusive.next(false)
  }

}
