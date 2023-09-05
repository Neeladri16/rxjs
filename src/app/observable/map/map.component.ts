import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  //subscription
  sub1:Subscription;
  sub2:Subscription;

  //messages
  msg1;
  msg2;


  constructor(private _du:DesignUtilityService){}
  ngOnInit(): void {
     const broadCastVideos= interval(1000);

     //Ex - 01
     this.sub1=broadCastVideos.pipe(
      map(data => 'Video '+data)
     ).subscribe(res=>{
      // console.log(res)
      this.msg1 = res
     })

     setTimeout(()=>{
        this.sub1.unsubscribe();
     },10000)

    //Ex - 02
     this.sub2 = broadCastVideos.pipe(
      map(data => data*10)
     ).subscribe(res=>{
      // console.log(res);
      this.msg2 =res
     })

      setTimeout(()=>{
      this.sub2.unsubscribe()
      },10000)
     

      //Ex - 03
      const members = from([
        {id: 1, name:'john'},
        {id: 2, name:'wick'},
        {id: 3, name:'ragnar'},
        {id: 4, name:'lodbrock'},
        {id: 5, name:'alvaro'},
        {id: 6, name:'morte'},
        {id: 7, name:'heisen'},
        {id: 8, name:'berg'} 
      ])

      members.pipe(map(data => data.name)).subscribe(res=>{
        // console.log(res);
        this._du.print(res,'elContainer')
      })

  }

}
