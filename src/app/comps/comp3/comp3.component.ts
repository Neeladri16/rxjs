import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit{

  userName:string;

  constructor(private _du:DesignUtilityService){
    this._du.username.subscribe(res=>{
      this.userName =res;
  })
  }

  ngOnInit(): void {

  }

  onChange(uname){
    console.log(uname.value);
    this._du.username.next(uname.value)
  }
}
