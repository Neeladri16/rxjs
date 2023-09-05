import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  obsMsg;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    //OF

    const obs1 = of('Anup', 'Shekhar', 'Sharma');
    obs1.subscribe((res) => {
      // console.log(res)
      this._designUtility.print(res, 'elContainer');
    });
    //OF with object
    const obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });
    obs2.subscribe((res) => {
      // console.log(res)
      this.obsMsg = res;
      console.log('obs msg=>', this.obsMsg);
    });

    //From-array
    let Arr = ['Uxtrendz', 'John', 'Alex'];
    const Obs3 = from(Arr);
    Obs3.subscribe((res) => {
      // console.log('Obs3=>',res);
      this._designUtility.print(res, 'elContainer3');
    });

    //From - promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 3000);
    });

    // promise.then(res=>{
    //   console.log(res);
    // })

    const Obs4 = from(promise);
    Obs4.subscribe((res) => {
      // console.log(res);
      this._designUtility.print(res, 'elContainer4');
    });

    //From - String
    const Obs5 = from('Welcome to UX trends');
    Obs5.subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer5+');
    });
  }
}
