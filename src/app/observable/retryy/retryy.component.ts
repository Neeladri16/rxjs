import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retryy',
  templateUrl: './retryy.component.html',
  styleUrls: ['./retryy.component.scss']
})
export class RetryyComponent implements OnInit{

   constructor(private http:HttpClient){}
person;
fetching :boolean =false;
status= 'No Data';
  ngOnInit(): void {
//  this.fetchDetails()
  }

   fetchDetails(){
    this.fetching = true;
    this.status = 'Fetching Data...'
    this.http.get('https://64f7fe4d824680fd217f0138.mockapi.io/users')
    .pipe(
      // retry(2)
      retryWhen(err=>err.pipe(
        delay(3000),
        scan((retryCount)=>{
          if(retryCount>=5){
            throw err;
          }else{
            retryCount = retryCount +1;
            console.log('retryCount =>'+ retryCount);
            this.status = 'Retrying Attempt #'+ retryCount
            return retryCount;
          }
        },0)
      ))
    )
    .subscribe(res=>{
      console.log(res[0]);
      this.person=res[0];
      this.status ='Data Fetched'
      this.fetching = false;
    },
    (err)=>{
      console.log(err);
      this.status ='Problem Fetching Data';
      this.fetching = false;
    }
    
    )
   }

}
