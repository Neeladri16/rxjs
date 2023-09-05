import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  datArr = [
    { id: 1, name: 'john', gender: 'male' },
    { id: 2, name: 'doe', gender: 'male' },
    { id: 3, name: 'lila', gender: 'female' },
    { id: 4, name: 'pink', gender: 'female' },
    { id: 5, name: 'brave', gender: 'male' },
    { id: 6, name: 'calleor', gender: 'female' },
    { id: 7, name: 'drake', gender: 'male' },
    { id: 8, name: 'rihana', gender: 'female' },
    { id: 9, name: 'shee', gender: 'female' },
    { id: 10, name: 'shee2', gender: 'female' },
    { id: 11, name: 'john2', gender: 'male' },
    { id: 12, name: 'ref', gender: 'male' },
  ];

  data;

  ngOnInit(): void {
    const source = from(this.datArr);

    //Ex - 01

    source
      .pipe(
        filter((member) => member.name.length >= 5),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    //Ex - 02

    source
      .pipe(
        filter((member) => member.gender === 'male'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    //Ex - 03

    source
      .pipe(
        filter((member) => member.id <= 6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
  }
}
