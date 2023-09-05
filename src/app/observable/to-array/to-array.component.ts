import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit{
  users=[
    {name:'Anup',skill:'Angular'},
    {name:'Shekhar',skill:'html,css'},
    {name:'Sharma',skill:'Javascript'},
    {name:'UxTrendz',skill:'Typescript'}
  ]
  sourceSub: Subscription
  ngOnInit(): void {
    //EX -01
     const source = interval(1000);

     this.sourceSub=source.pipe(
      take(5),
      toArray()
      )
      .subscribe(res=>{
      // console.log("Ex -01",res)
     })

    //EX -02
     const source2= from(this.users);
     source2.pipe(toArray()).subscribe(res=>{
      // console.log("Ex -02",res);
     })

     //Ex -03
     const source3 = of('Anup','Shekhar','Sharma','UxTrendz')
     source3.pipe(toArray()).subscribe(res=>{
      console.log(res);
     })
  }

}
