import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit{
constructor(private _du:DesignUtilityService){}

//Liat data
user1List =[
  'Angular1',
  'Angular2'
];
user2List =[];
user3List =[];

//subscribeModes
subscribeMode2 =false;
subscribeMode3 =false


//subscriptions
subscription2:Subscription;
subscription3:Subscription;

//Toggle Prooperties
methodInterval:boolean = false;
intervalSubscription:Subscription;

  ngOnInit(): void {
    this._du.videoEmit.subscribe(res=>{
      console.log(res);
      this.user1List.push(res)
    })
  }


  onVideoAdd(video){
    // console.log(video);
    this._du.videoEmit.next(video)
  }

  //user 2 subscribe button
  user2Subscribe(){
    // console.log(this.subscribeMode2);
    if(this.subscribeMode2){
      this.subscription2.unsubscribe()
    }else{
      this.subscription2 = this._du.videoEmit.subscribe(res=>{
        this.user2List.push(res)
      })
    }

    this.subscribeMode2 = !this.subscribeMode2
  }

   //user 3 subscribe button
   user3Subscribe(){
    // console.log(this.subscribeMode2);
    if(this.subscribeMode3){
      this.subscription3.unsubscribe()
    }else{
      this.subscription3 = this._du.videoEmit.subscribe(res=>{
        this.user3List.push(res)
      })
    }

    this.subscribeMode3 = !this.subscribeMode3
  }


  //toggle method
  toggleMethod(){
    const broadCastVideo = interval(1000);

    if(!this.methodInterval){
     this.intervalSubscription = broadCastVideo.subscribe(res=>{
        this._du.videoEmit.next('video '+ res)
      })
    }else{
      this.intervalSubscription.unsubscribe()
    }

   this.methodInterval =!this.methodInterval
  }
}
