import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss'],
})
export class DebouncetimeComponent implements AfterViewInit {
  reqData= null;
  @ViewChild('myInput') myInput: ElementRef;

  reqData2= null;
  @ViewChild('myInput2') myInput2: ElementRef;

  constructor(private loadingbar :LoadingBarService ) {}
  

  ngAfterViewInit(): void {

    //Ex -01 debounceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500)
    );

    searchTerm.subscribe((res) => {
      console.log(res);
      this.reqData = res;
      this.loadingbar.start()

      setTimeout(() => {
        this.reqData = null
        this.loadingbar.stop()
      }, 1000);
    });

     //Ex -01 distinctUntilChanged
     const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm2.subscribe((res) => {
      console.log(res);
      this.reqData2 = res;
      this.loadingbar.start()

      setTimeout(() => {
        this.reqData2 = null
        this.loadingbar.stop()
      }, 1000);
    });
  }
}
