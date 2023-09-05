import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}
  myColor: string = '';
  ngOnInit(): void {
    const source = interval(1500);

    //EX -01
    const Arr = [
      'Anup',
      'Shekhar',
      'Sharma',
      'Uxtrendz',
      'John',
      'Alex',
      'Robert',
    ];

    let obsSubscription: Subscription;

    obsSubscription = source
      .pipe(
        tap((res) => {
          if (res == 6) {
            //becauase undefined was getting printed
            obsSubscription.unsubscribe();
          }
        }),
        map((res) => Arr[res])
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print(res, 'elContainer');
      });

    //EX -01
    const Colors = ['red', 'green', 'blue', 'yellow', 'pink', 'violet', 'grey'];

    let obsSubscription2: Subscription;

    obsSubscription2 = source
      .pipe(
        tap((res) => {
          this.myColor = Colors[res]
          if (res == 7) {
            //because undefined was getting printed
            obsSubscription2.unsubscribe();
          }
        }),
        map((res) => Colors[res])
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print(res, 'elContainer2');
      });
  }
}
