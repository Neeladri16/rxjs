import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit{
  constructor(private _du:DesignUtilityService){}
  
  asyncVideoEmit;
    ngOnInit(): void {
       this._du.asyncVideoEmit.subscribe(res=>{
         this.asyncVideoEmit = res
       })
    }
  
  //video Add method
    onVideoAdd(video){
      console.log(video);
      this._du.asyncVideoEmit.next(video)
    }
  
    onComplete(){
      this._du.asyncVideoEmit.complete()
    }
  }
