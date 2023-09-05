import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  constructor() {}
  users = [
    {
      name: 'john',
      skills: 'html',
      job: {
        title: 'frontend developer',
        experience: '10 years',
      },
    },
    {
      name: 'wick',
      skills: 'html,css',
      job: { title: 'html developer', experience: '10 years' },
    },
    {
      name: 'alvaro',
      skills: 'javascript',
      job: { title: '.net developer', experience: '10 years' },
    },
    {
      name: 'morte',
      skills: 'react',
      job: { title: 'ui developer', experience: '10 years' },
    },
    {
      name: 'ragnar',
      skills: 'vue',
      job: { title: 'java developer', experience: '10 years' },
    },
    {
      name: 'lothbrock',
      skills: 'angular',
      job: { title: 'c# developer', experience: '10 years' },
    },
  ];

  data;
  data2;
  
  ngOnInit(): void {
    //Ex -01
    from(this.users)
      .pipe(
        // map(data => data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    //Ex -02
    from(this.users)
      .pipe(
        // map(data => data.name),
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });

  }
}
