import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit{
constructor(private _du: DesignUtilityService){}


randomNames= ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'John', 'Alex', 'Robert']

  ngOnInit(): void {
     
    const nameSource = from(this.randomNames)

     // Ex - 01 | Take
    // const source = interval(1000).pipe(take(5));

    nameSource
    .pipe(
      take(5)
    )
    .subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainer')
    })

         // Ex - 02 | Take last

    nameSource
    .pipe(
      takeLast(3)
    )
    .subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainer2')
    })

       // Ex - 03 | Take until

       const source = interval(1000)

       let condition1= timer(5000);
       let condition2= fromEvent(document,'click');

       source.pipe(
        map(res => 'Number' + res),
        takeUntil(condition2)
       ).subscribe(res=>{
         console.log(res);
         this._du.print(res,'elContainer3')
       })


  }

}
